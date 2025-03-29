$('button').click(function(){
    $('.pop-up').addClass('open');
  });
  
  $('.pop-up .close').click(function(){
    $('.pop-up').removeClass('open');
  });


  $(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get the values from the form fields
      var email = $('#email').val().trim();
      var password = $('#password').val().trim();

      // Check if email and password match the desired values
      if (email === 'jyotiba@gmail.com' && password === '1234') {
        // Redirect to another page
        window.location.href = 'https://www.netflix.com/in/';
      } else {
        // Display an alert if the email and password don't match
        alert('Incorrect email or password. Please try again.');
      }
    });
  });