var app = app || {};

app.userController = (function () {
    function UserController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    UserController.prototype.showRegisterPage = function (selector) {
        this._viewBag.showRegisterPage(selector);
    };

    UserController.prototype.register = function (data) {
        this._model.register(data)
            .then(function (successData) {
                setSessionStorage(successData);
                Sammy(function () {
                    this.trigger('redirectUrl', { url: '#/posts' });
                });
            }).done();
    };

    UserController.prototype.showLoginPage = function (selector) {
        this._viewBag.showLoginPage(selector);
    };

    UserController.prototype.login = function (data) {        
        this._model.login(data)
            .then(function (successData) {
                setSessionStorage(successData);
                Sammy(function () {
                    this.trigger('redirectUrl', { url: '#/posts' });
                });
            }).done();
    };

    UserController.prototype.logout = function () {
        this._model.logout()
            .then(function () {
                sessionStorage.clear();
            }).done();
    };

    function setSessionStorage(data) {
        sessionStorage['sessionAuth'] = data._kmd.authtoken;
        sessionStorage['userId'] = data._id;
        sessionStorage['username'] = data.username;
    }

    function clearSessionStorage() {
        delete sessionStorage['sessionAuth'];
        delete sessionStorage['userId'];
        delete sessionStorage['username'];
    }

    return {
        load: function (model, viewBag) {
            return new UserController(model, viewBag);
        }
    };

})();