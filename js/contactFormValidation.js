var $form = $('form#contactForm'),
    url = 'https://script.google.com/macros/s/AKfycbwFy8ygkYeNlDlLLj5qpI-UYGIRhnQ_x0PcKyHA/exec'

$("#contactForm").validate({
    errorPlacement: function(error, element) {}
})

$('#contactFormSubmit').on('click', function(event) {
    event.preventDefault();
    $form.validate();
    if ($form.valid() === false) {
        event.stopPropagation();
        updateSuccessPrompt(false);
    } else {
        updateSuccessPrompt(true);
        // var post = $.ajax({
        //     url: url,
        //     method: "POST",
        //     dataType: "json",
        //     data: $form.serializeObject(),
        //     success: updateSuccessPrompt(true)
        // });
    }
    $form.addClass('was-validated');
})

function updateSuccessPrompt(success) {
    var output = document.getElementById('contactFormOutput');
    if (success) {
        output.innerHTML = "Successfully submitted your message! Thank you for "
                + "reaching out to me. I will get back to you as soon as possible.";
    } else {
        output.innerHTML = "";
    }
}
