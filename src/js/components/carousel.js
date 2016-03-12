$(function() {
    //var carousel = {
        //selector: '.slide-wrapper',
        //controls: '.control',
        //speed: 5000,
        //currentSlide: 0,
        //slideDirection: 'up',
        //bindEvents: function() {
        //    var carouselNode = $(this.selector),
        //        carouselControl = $(this.controls);
        //
        //    this.slide(carouselNode);
        //
        //    carouselControl.on('click', function() {
        //        var self = $(this);
        //
        //        if (self.hasClass('next')) {
        //            if (carousel.currentSlide + 1 < carouselNode.children().length) {
        //                carousel.currentSlide += 1;
        //                carousel.slide();
        //            }
        //        }
        //
        //        if (self.hasClass('prev')) {
        //            if (carousel.currentSlide - 1 > 0) {
        //                carousel.currentSlide -= 1;
        //                carousel.slide();
        //            }
        //        }
        //
        //        console.log(carousel.currentSlide);
        //    });
        //},
        //slide: function(element) {
        //    var slidesCount = element.children().length;
        //
        //    setInterval(function() {
        //
        //        if (carousel.currentSlide + 1 == slidesCount) {
        //            carousel.slideDirection = 'down';
        //        }
        //
        //        console.log(carousel.currentSlide);
        //
        //        if (carousel.currentSlide - 1 < 0) {
        //            carousel.slideDirection = 'up';
        //        }
        //
        //        switch (carousel.slideDirection) {
        //            case 'up':
        //                carousel.currentSlide += 1;
        //                break;
        //            case 'down':
        //                carousel.currentSlide -= 1;
        //                break;
        //            default: throw new Error('Unknown slide direction');
        //        }
        //
        //        element.css('transform', 'translate3d(-' + (carousel.currentSlide * 10 ) + '%, 0, 0)');
        //    },this.speed)
        //},
    //    init: function() {
    //        this.bindEvents();
    //    }
    //};
    var carousel = {
        selector: '.carousel',
        bindEvents: function() {
            var carouselNode,
                carouselControls,
                currentSlide = 0;

            carouselNode = $(this.selector);

            carouselControls = carouselNode.find('.control');
            carouselControls.on('click', function() {
                carousel.slide(carouselNode.find('.slide-wrapper'), currentSlide);
            });
        },
        slide: function(slides, slidePosition) {
            slides.css('transform', 'translate3d(-' + slidePosition + '%, 0, 0)');
        },
        init: function() {
            this.bindEvents();
        }
    };

    $(function() {
        carousel.init();
    });
});