'use strict';

var dsteem = require('dsteem'),
    create = require('./../../../lib/content-creator'),
    config = require('./../../../configs/config'),
    client = new dsteem.Client(config.steem_api);

var last_id = 0;

async function display() {
    try {
        $('#item-container').html('');
        $('#post-loader').show();

        var results = await Promise.resolve(
            $.get('/api/reports/project/' + project_slug + '/' + last_id)
        );

        if (results.length == 0) {
            $('#post-loader').hide();

            return;
        } else {
            const reports = await get_posts(results);

            $('#post-loader').hide();

            for (var x in reports) {
                var post = await create.post(reports[x]);
                $('#item-container').append(post);
            }

            if (results.length == 20) {
                $('#moreBtn').show();
                last_id = results[results.length - 1]._id;
            }
        }
    } catch (err) {
        pqy_notify.warn('Sorry, error fetching reports');
        console.log(err);
    }
}

async function get_posts(data) {
    var posts = [];

    for (var x in data) {
        var post = await client.database.call('get_content', [
            data[x].author,
            data[x].permlink,
        ]);
        if (post && post.author !== '') posts.push(post);
    }

    return posts;
}

$('#moreBtn').on('click', function() {
    $(this).hide();
    display();
});

$(window).on('load', function() {
    display();
});
