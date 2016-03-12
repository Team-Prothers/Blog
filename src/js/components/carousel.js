$(function() {
    var carousel = {
        slideSpeed: 2000,
        carouselSelector: '.carousel',
        slideSelector: '.slide',
        controlSelector: '.control',
        slide: function(slides, currentSlide) {
            slides.css('transform', 'translate3d(-'+ currentSlide * 100 +'%, 0, 0)');
        },
        init: function() {
            var currentSlide = 0,
                carouselNode = $(this.carouselSelector),
                carouselControls = carouselNode.find(this.controlSelector),
                slides = carouselNode.find(this.slideSelector),
                slidesCount = slides.length || 0,
                direction = 'up';

            carouselControls.on('click', function() {
                var clickedControl = $(this);

                // SLIDE TO PREV
                if (clickedControl.hasClass('prev')) {
                    if (currentSlide - 1 >= 0) {
                        currentSlide -= 1;

                        carousel.slide(slides, currentSlide);
                    }
                }

                // SLIDE TO NEXT
                if (clickedControl.hasClass('next')) {
                    if (currentSlide + 1 < slidesCount) {
                        currentSlide += 1;

                        carousel.slide(slides, currentSlide);
                    }
                }
            });
        }
    };

    $(function() {
        carousel.init();
    });
});