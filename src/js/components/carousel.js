$(function() {
    var carousel = {
        /*
         *  Carousel Settings:
         *
         *  @param {Number} autoSlideInterval
         *  @param {String} carouselSelector
         *  @param {String} slideSelector
         *  @param {String} controlSelector
         */
        autoSlideInterval: 5000,
        carouselSelector: '.carousel',
        slideSelector: '.slide',
        controlSelector: '.control',
        /*
         *  Slide just once
         */
        slide: function(slides, currentSlide) {
            slides.css('transform', 'translate3d(-'+ currentSlide * 100 +'%, 0, 0)');
        },
        /*
         *  Auto slide on interval
         *
         *  @param {jQuery Object} slides
         *  @param {Number} currentSlide
         *  @param {Number} slidesCount
         */
        autoSlide: function(slides, currentSlide, slidesCount) {
            var direction = 'up';

            setInterval(function() {
                // If is last slide
                if (currentSlide + 1 >= slidesCount) {
                    direction = 'down';
                }

                // If is first slide
                if (currentSlide - 1 < 0) {
                    direction = 'up';
                }

                switch (direction) {
                    case 'up':
                        currentSlide += 1;
                        break;
                    case 'down':
                        currentSlide -= 1;
                        break;
                    default: console.warn('Unknown sliding direction'); return;
                }

                carousel.slide(slides, currentSlide);
            }, carousel.autoSlideInterval);
        },
        /*
         *  Bind click event on Carousel control
         *
         *  @param {jQuery Object} slides
         *  @param {jQuery Object} carouselControls
         *  @param {Number} currentSlide
         *  @param {Number} slidesCount
         */
        bindEvents: function(slides, carouselControls, currentSlide, slidesCount) {
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
        /*
         *  MAIN
         */
        init: function() {
            var carouselNode = $(this.carouselSelector),
                carouselControls = carouselNode.find(this.controlSelector),
                slides = carouselNode.find(this.slideSelector),
                currentSlide = 0,
                slidesCount = slides.length || 0;

            // If there are slides and they are more than 1
            if (carouselNode && slides.length > 1) {
                // If auto slide is ON
                if (carouselNode.data('autoslide')) {
                    this.autoSlide(slides, currentSlide, slidesCount);
                }

                // If controls are enabled
                if (carouselNode.data('controls')) {
                    this.bindEvents(slides, carouselControls, currentSlide, slidesCount);
                }
            }
        }
    };

    $(function() {
        // On ready INIT MAIN
        carousel.init();
    });
});