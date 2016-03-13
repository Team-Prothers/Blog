// JUST TEST THE CONTENT OVERFLOW
var contentNode = $('.inner-content');

for (var i = 0; i < 200; i += 1) {
    $('<p>').text(i).appendTo(contentNode);
};