var app = app || {};

app.commentModel = (function () {
    function CommentModel(requester) {
        this._requester = requester;
        this.serviceUrl = requester.baseUrl + 'appdata/' + requester.appId + '/comments';
    }

    CommentModel.prototype.getAllComments = function () {
        return this._requester.get(this.serviceUrl, true);
    };
    
    CommentModel.prototype.getPostComments = function (postId) {
        return this._requester.get(this.serviceUrl + '?query={"post._id":"' + postId + '"}', true);
    };

    CommentModel.prototype.getRecentComments = function (numberOfComments) {
        return this._requester.get(
            this.serviceUrl + '?query={}&sort=_kmd.lmt&limit=' + numberOfComments, true);
    };

    CommentModel.prototype.addNewComment = function (data) {
        return this._requester.post(this.serviceUrl, data, true);
    };

    CommentModel.prototype.editComment = function (data) {
        var outputData = {
            text: data.text,
            user: data.user,
            post: data.post
        };

        return this._requester.put(this.serviceUrl + '/' + data.id, outputData, true);
    };

    CommentModel.prototype.deleteComment = function (id) {
        return this._requester.remove(this.serviceUrl + '/' + id, true);
    };

    return {
        load: function (requester) {
            return new CommentModel(requester);
        }
    };      
})();