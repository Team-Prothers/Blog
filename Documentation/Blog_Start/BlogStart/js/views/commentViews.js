var app = app || {};

app.commentViews = (function () {
    function showAllComments(selector, data) {
        $.get('templates/comments.html', function (template) {
            var rendered = Mustache.render(template, data);
            $(selector).html(rendered);
            $('#addNewComment').on('click', function (e) {
                Sammy(function () {
                    this.trigger('redirectUrl', { url: '#/addNewComment' })
                });
            });
        });
    }

    function showRecentComments(selector, data) {
        $.get('templates/recent-comments.html', function (template) {
            var rendered = Mustache.render(template, data);
            $(selector).html(rendered);
        });
    }

    function showAddNewComment(selector) {
        $.get('templates/addNewComment.html', function (template) {
            var rendered = Mustache.render(template);
            $(selector).html(rendered);
            $('#addComment').on('click', function (e) {
                var text = $('#text').val();
                Sammy(function () {
                    this.trigger('add-new-comment', { text: text });
                });
            });
        });
    }

    return {
        load: function () {
            return {
                showAllComments: showAllComments,
                showRecentComments: showRecentComments,
                showAddNewComment: showAddNewComment
            }
        }
    };
})();