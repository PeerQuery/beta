'use strict';

var router = require('../../server/router'),
    peers = require('../../models/peer'),
    address = require('../indexes/address');

module.exports = function(app) {
    app.get('/account', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            var results = await peers
                .findOne({ account: req.active_user.account })
                .select(
                    'account project_count report_count query_count following_count followers_count view_count curation_points -_id'
                );

            if (!results) return router(address._static._404, req, res);

            res.req_data = results;

            return router(address.account.account, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/inbox', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            var results = await peers
                .findOne({ account: req.active_user.account })
                .select('account received_messages viewed_messages -_id');

            if (!results) return router(address._static._404, req, res);

            res.req_data = results;

            return router(address.account.inbox, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/hires', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            var results = await peers
                .findOne({ account: req.active_user.account })
                .select('account received_hires sent_hires -_id');

            if (!results) return router(address._static._404, req, res);

            res.req_data = results;

            return router(address.account.hires, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/memberships', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            var results = await peers
                .findOne({ account: req.active_user.account })
                .select('account project_membership_count -_id');

            if (!results) return router(address._static._404, req, res);

            res.req_data = results;

            return router(address.account.memberships, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/beneficiaries', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            var results = await peers
                .findOne({ account: req.active_user.account })
                .select(
                    'account beneficiaries_count beneficiaries_percentage created -_id'
                );

            if (!results) return router(address._static._404, req, res);

            res.req_data = results;

            return router(address.account.beneficiaries, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/notifications', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            res.req_data = { account: req.active_user.account };

            return router(address.account.notifications, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/activity', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            res.req_data = { account: req.active_user.account };

            return router(address.account.activity, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/settings', async function(req, res) {
        try {
            if (!req.active_user.account) {
                res.redirect('/login');
                return;
            }

            var results = await peers
                .findOne({ account: req.active_user.account })
                .select(
                    'account messaging hiring new_benefactor_message_title new_benefactor_message_body -_id'
                );

            if (!results) return router(address._static._404, req, res);

            res.req_data = results;

            return router(address.account.settings, req, res);
        } catch (err) {
            console.log(err);
            return router(address._static._404, req, res);
        }
    });

    app.get('/account/wallet', function(req, res) {
        if (!req.active_user.account) {
            res.redirect('/login');
            return;
        }

        res.status(302).redirect(
            '/account/' + req.active_user.account + '/wallet'
        );
    });

    //re-direct for the former scheme, if bookmarked by some users
    app.get('/peer/:username/inbox', function(req, res) {
        res.status(301).redirect('/account/inbox');
    });
};
