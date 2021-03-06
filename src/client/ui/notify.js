'use strict';

const msg_markup =
    '<div class="DIV_CLASS"><i class="MSG_ICON_CLASS"></i><i class="close icon"></i><span>MSG_BODY</span></div>';

//button closing event listener could be found in listeners module. setting listeners individually for every dynamically created message doesn't work well

module.exports = {
    inform: function(msg) {
        let new_msg_markup = msg_markup;
        new_msg_markup = new_msg_markup.replace(
            /DIV_CLASS/,
            'ui mini info message'
        );
        new_msg_markup = new_msg_markup.replace(
            /MSG_ICON_CLASS/,
            'circular inverted teal small info icon'
        );
        new_msg_markup = new_msg_markup.replace(/MSG_BODY/, msg);
        $('#notifications-container').append(new_msg_markup);
    },
    success: function(msg) {
        let new_msg_markup = msg_markup;
        new_msg_markup = new_msg_markup.replace(
            /DIV_CLASS/,
            'ui mini positive message'
        );
        new_msg_markup = new_msg_markup.replace(
            /MSG_ICON_CLASS/,
            'circular inverted teal small check icon'
        );
        new_msg_markup = new_msg_markup.replace(/MSG_BODY/, msg);
        $('#notifications-container').append(new_msg_markup);
    },
    warn: function(msg) {
        let new_msg_markup = msg_markup;
        new_msg_markup = new_msg_markup.replace(
            /DIV_CLASS/,
            'ui mini negative message'
        );
        new_msg_markup = new_msg_markup.replace(
            /MSG_ICON_CLASS/,
            'circular inverted teal small exclamation icon'
        );
        new_msg_markup = new_msg_markup.replace(/MSG_BODY/, msg);
        $('#notifications-container').append(new_msg_markup);
    },
    tell: function(msg) {
        let new_msg_markup = msg_markup;
        new_msg_markup = new_msg_markup.replace(/DIV_CLASS/, 'ui mini message');
        new_msg_markup = new_msg_markup.replace(
            /MSG_ICON_CLASS/,
            'circular inverted teal small bell icon'
        );
        new_msg_markup = new_msg_markup.replace(/MSG_BODY/, msg);
        $('#notifications-container').append(new_msg_markup);
    },
    persist: function(msg) {
        let new_msg_markup =
            '<div class="DIV_CLASS"><i class="MSG_ICON_CLASS"></i><span>MSG_BODY</span></div>';
        new_msg_markup = new_msg_markup.replace(
            /DIV_CLASS/,
            'ui mini yellow message'
        );
        new_msg_markup = new_msg_markup.replace(
            /MSG_ICON_CLASS/,
            'circular inverted black small ban icon'
        );
        new_msg_markup = new_msg_markup.replace(/MSG_BODY/, msg);
        $('#notifications-container').append(new_msg_markup);
    },
};
