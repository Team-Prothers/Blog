var app = app || {};

app.commentController = (function () {
    function CommentController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    CommentController.prototype.loadAllComments = function (selector) {
        var _this = this;

        this._model.getAllComments()
            .then(function (successData) {
                var result = {
                    comments: []
                };

                successData.forEach(function (comment) {
                    result.comments.push({
                        text: comment.text,
                        commentId: comment._id
                    });
                });

                _this._viewBag.showAllComments(selector, result);
            });
    };

    CommentController.prototype.loadPostComments = function (selector, post) {
        var _this = this;

        this._model.getPostComments(post._id)
            .then(function (successData) {
                var result = {
                    comments: []
                };

                successData.forEach(function (comment) {
                    result.comments.push({
                        text: comment.text,
                        commentId: comment._id
                    });
                });

                var renderData = {};
                renderData['post'] = post;
                renderData['comments'] = successData;

                _this._viewBag.showPostComments(selector, renderData);
            });
    };

    CommentController.prototype.loadRecentComments = function (selector, numberOfComments) {
        var _this = this;

        this._model.getRecentComments(numberOfComments)
            .then(function (successData) {
                var result = {
                    comments: []
                };

                successData.forEach(function (comment) {
                    result.comments.push({
                        text: comment.text,
                        commentId: comment._id,
                        postId: comment.post._id
                    });
                });

                _this._viewBag.showRecentComments(selector, result);
            });
    };

    CommentController.prototype.loadAddCommentPage = function (selector, postId) {
        this._viewBag.showAddNewComment(selector, postId);
    };

    CommentController.prototype.addNewComment = function (data) {
        this._model.addNewComment(data)
            .then(function () {
                Sammy(function () {
                    this.trigger('redirectUrl', { url: '#/posts/' + data.post._id + '/comments' });
                });
            });
    };

    CommentController.prototype.editComment = function (data) {
        return this.model.editComment(data)
            .then(function () {
                Sammy(function () {
                    this.trigger('redirectUrl', { url: '#/comments' });
                });
            }, function (error) {
                console.error(error);
            });
    };

    CommentController.prototype.deleteComment = function (id) {
        return this.model.deleteComment(id)
            .then(function () {
                Sammy(function () {
                    this.trigger('redirectUrl', { url: '#/comments' });
                });
            }, function (error) {
                console.error(error);
            });
    };

    return {
        load: function (model, viewBag) {
            return new CommentController(model, viewBag);
        }
    };
})();