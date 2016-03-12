$(function() {
    var carousel = {
        slideSpeed: 2000,
        carouselSelector: '.carousel',
        slideSelector: '.slide',
        controlSelector: '.control',
        slide: function(slides, currentSlide) {
            slides.css('transform', 'translate3d(-'+ currentSlide * 100 +'%, 0, 0)');
        },
        autoSlide: function() {

        },
        bindEvents: function(slides, carouselControls, currentSlide) {
            var slidesCount = slides.length || 0;

            // Enable controls
            carouselControls.parent().addClass('enabled');
            // Attach click event
            carouselControls.on('click', function() {
                var clickedControl = $(this);

                // Slide to the PREV
                if (clickedControl.hasClass('prev')) {
                    if (currentSlide - 1 >= 0) {
                        currentSlide -= 1;

                        carousel.slide(slides, currentSlide);
                    }
                }

                // Slide to the NEXT
                if (clickedControl.hasClass('next')) {
                    if (currentSlide + 1 < slidesCount) {
                        currentSlide += 1;

                        carousel.slide(slides, currentSlide);
                    }
                }
            });
        },
        init: function() {
            var carouselNode = $(this.carouselSelector),
                carouselControls = carouselNode.find(this.controlSelector),
                slides = carouselNode.find(this.slideSelector),
                currentSlide = 0,
                direction = 'up';

            // If there are slides and they are more than 1
            if (carouselNode && slides.length > 1) {
                // If auto slide is ON
                if (carouselNode.data('autoslide')) {
                    this.autoSlide();
                }

                // If controls are enabled
                if (carouselNode.data('controls')) {
                    this.bindEvents(slides, carouselControls, currentSlide);
                }
            }
        }
    };

    $(function() {
        carousel.init();
    });
});