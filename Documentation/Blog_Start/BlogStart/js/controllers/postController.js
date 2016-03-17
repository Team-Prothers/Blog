var app = app || {};

app.postController = (function () {
    function PostController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    PostController.prototype.loadAllPosts = function (selector) {
        var _this = this;

        this._model.getAllPosts()
            .then(function (successData) {
                var result = {
                    posts: []
                };

                successData.forEach(function (post) {
                    result.posts.push({
                        title: post.title,
                        content: post.content,
                        tags: post.tags,
                        image: post.image,
                        dateAdded: post._kmd.lmt,
                        postId: post._id
                    });
                });

                _this._viewBag.showAllPosts(selector, result);
            });
    }; 


    PostController.prototype.loadRecentPosts = function (selector, numberOfPosts) {
        var _this = this;

        this._model.getRecentPosts(numberOfPosts)
            .then(function (successData) {
                var result = {
                    posts: []
                };

                successData.forEach(function (post) {
                    result.posts.push({ title: post.title, content: post.content, tags: post.tags, postId: post._id });
                });

                _this._viewBag.showRecentPosts(selector, result);
            });
    };

    PostController.prototype.getPostById = function (id) {
        return this._model.getPostById(id);
    };


    PostController.prototype.loadAddPostPage = function (selector) {
        this._viewBag.showAddNewPost(selector);
    };

    PostController.prototype.addNewPost = function (data) {
        var _this = this;

        this._model.addNewPost(data)
            .then(function () {
                Sammy(function () {
                    this.trigger('redirectUrl', { url: '#/posts' });
                });
            });
    };

    return {
        load: function (model, viewBag) {
            return new PostController(model, viewBag);
        }
    };

})();