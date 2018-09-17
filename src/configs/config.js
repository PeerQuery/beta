
'use strict';

//this module will be bundle to the client so should contain ONLY NON-SENSITIVE information

var config = {};

//site
config.site_name = "Peer Query";
config.site_description = "Peer to Peer collaborations powered by Steem";
config.site_uri = "http://www.peerquery.com";

//steem
config.steem_api = "https://api.steemit.com";
config.steem_rpc = "https://api.steemit.com";
config.steem_account = "peerquery";

//sc2
config.sc2_app_name = "peerquery.app";
config.sc2_scope = "vote,comment,custom_json";
config.sc2_scope_array = "['vote', 'comment', 'custom_json']";

module.exports = config;