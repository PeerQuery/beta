$(window).on('load', function() {
    //jquery is already universal through the `scripts.js` global file

    $('#update_project_theme').on('click', async function() {
        try {
            $(this).addClass('disabled');
            pqy_notify.inform('Updating project, please wait');

            let data = {
                slug_id: slug_id,
                type: $('#projectType')
                    .find(':selected')
                    .val(),
                color: $('#projectColor').val(),
            };

            var response = await Promise.resolve(
                $.post('/api/private/update/project/project_theme', data)
            );

            pqy_notify.success('Successfully updated project theme');
        } catch (err) {
            console.log(err);
            pqy_notify.warn('Sorry, an error occured. Please again');
            //window.location.reload();
        }
    });

    $('#update_action_button').on('click', async function() {
        try {
            $(this).addClass('disabled');
            pqy_notify.inform('Updating project, please wait');

            let data = {
                slug_id: slug_id,
                msg: $('#msg').val(),
                uri: $('#uri').val(),
            };

            var response = await Promise.resolve(
                $.post('/api/private/update/project/action_button', data)
            );

            pqy_notify.success('Successfully updated action button');
        } catch (err) {
            console.log(err);
            pqy_notify.warn('Sorry, an error occured. Please again');
            //window.location.reload();
        }
    });
});
