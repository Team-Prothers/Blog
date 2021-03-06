$(function() {
    var navigation = {
        selector: '#main-navigation',
        bindEvents: function() {
            var navigationNode = $(this.selector),
                headerNode = $('#main-header');
            headerNode.innerHeight(window.innerHeight);

            $(window).on('scroll', function() {
                if (scrollY >= headerNode.innerHeight()) {
                    navigationNode.addClass('sticky');
                } else {
                    navigationNode.removeClass('sticky');
                }
            })
        },
        init: function() {
            this.bindEvents();
        }
    };

    $(function() {
        navigation.init();
    });
});