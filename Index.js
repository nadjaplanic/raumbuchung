$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'test'; // User validate
        var ValidPassword = $('#password').val() === 'test'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "http://arkev.com"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
