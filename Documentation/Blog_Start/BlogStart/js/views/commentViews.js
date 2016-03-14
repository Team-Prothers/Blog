var app = app || {};

app.commentViews = (function () {
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
                showAddNewComment: showAddNewComment
            }
        }
    };
})();