'use strict';

const config = require(__dirname + './../../configs/config');

module.exports = async function() {
    //----------auth system

    const login_url =
        'https://v2.steemconnect.com/oauth2/authorize?client_id=' +
        //"peerquery.app" +
        config.sc2_app_name +
        '&redirect_uri=http%3A%2F%2F' +
        window.location.hostname +
        '%2Flogin' +
        //"&scope=vote,comment,comment_options,custom_json" +
        '&scope=' +
        config.sc2_scope +
        '&state=%2F' +
        window.location.pathname.substring(1);

    //initialize auth system

    //check is sessionStorage is supported or not. if not - alert the user that their browser is NOT supported
    if (typeof Storage == 'undefined') {
        pqy_notify.warn(
            'Sorry your browser is NOT supported. Please upgrade or switch to a modern broswer.'
        );
        return;
    }

    if (active_user && active_user !== '' && sessionStorage.access_token) {
        //user logged in, all values are ok

        $('#loggedin-desktop-options').show();
        $('#loggedin-desktop-create').show();
    } else if (
        active_user &&
        active_user !== '' &&
        !sessionStorage.access_token
    ) {
        //user logged but reopened browser so no sessionStorage

        //ping server for access_token and store in sessionStorage
        try {
            const auth = await Promise.resolve($.post('/api/private/auth', {}));
            sessionStorage.access_token = auth.access_token;

            $('#loggedin-desktop-options').show();
            $('#loggedin-desktop-create').show();
        } catch (err) {
            pqy_notify.warn(
                'Sorry, could not auth your account. Consider signing in again'
            );
            console.log(err);
            if (
                window.location.pathname !== '/login' &&
                window.location.pathname.indexOf('/peer/') == -1
            )
                window.location.href = '/login';
        }
    } else if (!active_user || active_user == '') {
        //user is not logged in
        if (sessionStorage.access_token)
            sessionStorage.removeItem('access_token');
        $('#loggedin-desktop-options').hide();
        $('#navbarLoginButton').show();
        $('#signupButton').show();
        $('#navbarLoginButton').attr('href', login_url);
    }
};
