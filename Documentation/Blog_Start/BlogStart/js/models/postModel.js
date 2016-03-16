var app = app || {};

app.postModel = (function () {
    function PostModel(requester) {
        this._requester = requester;
        this.serviceUrl = requester.baseUrl + 'appdata/' + requester.appId + '/posts';
    }

    PostModel.prototype.getAllPosts = function () {
        return this._requester.get(this.serviceUrl, true);
    };

    PostModel.prototype.getPostById = function (id) {
        return this._requester.get(this.serviceUrl + '/' + id, true);
    };

    PostModel.prototype.getRecentPosts = function (numberOfPosts) {
        return this._requester.get(this.serviceUrl + '?query={}&sort=_kmd.lmt&limit=' + numberOfPosts, true);
    };

    PostModel.prototype.addNewPost = function (data) {
        return this._requester.post(this.serviceUrl, data, true);
    };

    return {
        load: function (requester) {
            return new PostModel(requester);
        }
    };

})();