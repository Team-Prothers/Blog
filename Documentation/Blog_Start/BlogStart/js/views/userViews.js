var app = app || {};

app.userViews = (function () {
    function showRegisterPage(selector) {
        $.get('templates/register.html', function (template) {
            $(selector).html(template);
            $('#register').on('click', function (e) {
                var username = $('#reg-username').val(),
                    password = $('#reg-password').val(),
                    confirmPass = $('#conf-password').val(),
                    gender = $('input:radio[name=gender-radio]:checked').val(),
                    picture = $('.picture-preview').attr('src');

                if (password === confirmPass) {
                    Sammy(function () {
                        this.trigger('register', { username: username, password: password, gender: gender, picture: picture, isAdmin: false });
                    });
                }
            });
        });
    }

    function showLoginPage(selector) {
        $.get('templates/login.html', function (template) {
            $(selector).html(template);
            $('#login').on('click', function (e) {
                var username = $('#login-username').val(),
                    password = $('#login-password').val();
                    
                Sammy(function () {
                    this.trigger('login', { username: username, password: password });
                });              
            });
        });
    }

    return {
        load: function () {
            return {
                showLoginPage: showLoginPage,
                showRegisterPage: showRegisterPage
            }
        }
    };

})();