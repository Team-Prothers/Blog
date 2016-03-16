var poppy = poppy || {};

(function(scope) {
    'use strict';

    var CLOSE_BUTTON_TEXT = '×',
        POSITIONS = {
            'topLeft': 'poppy-top-left',
            'topRight': 'poppy-top-right',
            'bottomLeft': 'poppy-bottom-left',
            'bottomRight': 'poppy-bottom-right'
        },
        POPUP_TYPES = {
            'error': 'poppy-error',
            'info': 'poppy-info',
            'success': 'poppy-success',
            'warning': 'poppy-warning'
        };

    var createPopupView = function(popupInfo) {
        var positionClass = POSITIONS[popupInfo.position],
            typeClass = POPUP_TYPES[popupInfo.type],
            autoHide = popupInfo.autoHide || true,
            timeout = popupInfo.timeout,
            close = popupInfo.closeButton || false,
            title = popupInfo.title,
            message = popupInfo.message,
            callback = popupInfo.callback;

        var containerNode = document.createElement('div'),
            popupNode = document.createElement('div'),
            button = document.createElement('button'),
            titleNode = document.createElement('div'),
            messageNode = document.createElement('div');

        attachClasses();

        if (close === true) {
            button.innerText = CLOSE_BUTTON_TEXT;
            button.textContent = CLOSE_BUTTON_TEXT;
            button.setAttribute('type', 'button');
            button.className += "poppy-close-button";
            popupNode.appendChild(button);
        }

        containerNode.appendChild(popupNode);
        popupNode.appendChild(titleNode);
        popupNode.appendChild(messageNode);

        return containerNode;

        function attachClasses() {
            containerNode.className += positionClass + ' poppy-container';
            popupNode.className += typeClass;
            titleNode.className += "poppy-title";
            titleNode.innerText = title;
            titleNode.textContent = title;
            messageNode.className += "poppy-message";
            messageNode.innerText = message;
            messageNode.textContent = message;
        }
    }

    scope._viewFactory = {
        createPopupView: createPopupView
    }
}(poppy));
