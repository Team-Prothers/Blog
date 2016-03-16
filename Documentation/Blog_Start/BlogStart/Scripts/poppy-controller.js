var poppy = poppy || {};

(function(scope) {
   'use strict';

    var OPACITY_STEP = 0.15,
        FADE_IN_INTERVAL = 20,
        FADE_OUT_INTERVAL = 100;

    function pop(type, title, message, callback) {
        var popup;
        switch (type) {
            case 'success':
                popup = new scope._models.Success(title, message);
                break;
            case 'info':
                popup = new scope._models.Info(title, message);
                break;
            case 'error':
                popup = new scope._models.Error(title, message);
                break;
            case 'warning':
                popup = new scope._models.Warning(title, message, callback);
                break;
        }
		
        var view = scope._viewFactory.createPopupView(popup._popupData);
        processView(view, popup._popupData);
    }

    function processView(element, popupData) {
        if (popupData.autoHide === true) {
            setTimeout(function() {
                fadeOut(element, FADE_OUT_INTERVAL);
            }, popupData.timeout);
        }

        if (popupData.closeButton === true) {
            element.getElementsByClassName('poppy-close-button')[0]
                .addEventListener('click', function() {
                    fadeOut(element, FADE_OUT_INTERVAL);
                });
        }
		
		if (popupData.callback) {
			element.addEventListener('click', function() {
				popupData.callback();
			});
		}

        element.style.opacity = 0;
        document.body.appendChild(element);
        fadeIn(element, FADE_IN_INTERVAL);
    }

    function fadeOut(element, interval) {
        var opacity = 1,
            disappearInterval = setInterval(function() {
                if (opacity <= 0) {
                    document.body.removeChild(element);
                    clearInterval(disappearInterval);
                }

                element.style.opacity = opacity;
                opacity -= OPACITY_STEP;
            }, interval);
    }


    function fadeIn(element, interval) {
        var opacity = 0,
            disappearInterval = setInterval(function() {
                if (opacity >= 1) {
                    clearInterval(disappearInterval);
                }

                element.style.opacity = opacity;
                opacity += OPACITY_STEP;
            }, interval);
    }

    scope.pop = pop;
}(poppy));
