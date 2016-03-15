﻿var app = app || {};

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

    function showAddNewPost(selector) {
        $.get('templates/addNewPost.html', function (template) {
            var rendered = Mustache.render(template);
            $(selector).html(rendered);
            $('#addPost').on('click', function (e) {
                var title = $('#title').val(),
                    content = $('#content').val(),
                    tag = $('#tags').val();
                Sammy(function () {
                    this.trigger('add-new-post', { title: title, content: content, tags: tag });
                });
            });
        });
    }

    return {
        load: function () {
            return {
                showAllPosts: showAllPosts,
                showAddNewPost: showAddNewPost
            }
        }
    };

})();