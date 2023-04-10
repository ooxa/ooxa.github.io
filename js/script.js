$(window).on('load', function() {
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'message': $('textarea[name=message]').val()
        };

        $.ajax({
            type: "POST",
            url: "https://ooxa.net/contact_test",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
                $('#error-message').addClass('d-none');
                alert("Message sent successfully.");
                $("#contact-form")[0].reset();
            },
            error: function(xhr, textStatus, errorThrown) {
                $('#error-message').removeClass('d-none');
                $('#error-message').text("An error occurred. Please try again later.");
                $('html, body').animate({ scrollTop: $('#error-message').offset().top }, 'slow');
            }
        });
    });
});
