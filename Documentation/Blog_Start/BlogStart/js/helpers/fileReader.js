// Change later to a more concrete selector
var selector = document.body;

// Trigger file selection window
$(selector).on('click', '.upload-file-button', function () {
    $('.picture').click();
});

// Reads the selected file and returns the data as a base64 encoded string
$(selector).on('change', '.picture', function () {
    var file = this.files[0],
        reader;

    if (file.type.match(/image\/.*/) && file.size <= 255000) {
        reader = new FileReader();
        reader.onload = function (e) {
            file.name = reader.name;
            $('.picture-preview').attr('src', e.target.result);
            $('.picture-name').text(file.name);
            // TODO: set file name to picture name paragraph
            // TODO: set read image data for image preview
        };
        reader.readAsDataURL(file);
    } else {
        poppy.pop('error', 'File error', 'Your image file type is wrong or image size exceeds 128kb');
        // TODO: Display type-mismatch error message
    }

});
