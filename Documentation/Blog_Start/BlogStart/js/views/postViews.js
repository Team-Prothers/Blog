var app = app || {};

app.postViews = (function () {
    function showAllPosts(selector, data) {
        $.get('templates/posts.html', function (template) {
            var rendered = Mustache.render(template, data);
            $(selector).html(rendered);
            $('#addNewPost').on('click', function (e) {
                Sammy(function () {
                    this.trigger('redirectUrl', {url: '#/addNewPost'})
                });
            });
        });
    }

    function showRecentPosts(selector, data) {
        $.get('templates/recent-posts.html', function (template) {
            var rendered = Mustache.render(template, data);
            $(selector).html(rendered);
        });
    }

    function showAddNewPost(selector) {
        $.get('templates/addNewPost.html', function (template) {
            var rendered = Mustache.render(template);
            $(selector).html(rendered);
            $('#addPost').on('click', function (e) {
                var title = $('#title').val(),
                    content = $('#content').val(),
                    picture = $('.picture-preview').attr('src');                    

                Sammy(function () {
                    this.trigger('add-new-post', { title: title, content: content, picture: picture });
                });
            });
        });
    }

    return {
        load: function () {
            return {
                showAllPosts: showAllPosts,
                showRecentPosts: showRecentPosts,
                showAddNewPost: showAddNewPost
            }
        }
    };

})();