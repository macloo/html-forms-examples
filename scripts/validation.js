// Helpful - https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation 

$(document).ready(function() {  // do not delete 
// ----------------------------------------------------------------------------


// this hides a warning paragraph that will otherwise be seen by anyone 
// who does not have JavaScript enabled 
$('.nojs').hide(); 



// blank the field as soon as user touches it
$('input.valex').focus(function() {
	$(this).val('');
});



// use parsley.js to validate all field types
$('#validation_example').submit(function(e) { 
	e.preventDefault();

	if ( $(this).parsley().validate() ) {

		var a = $('#fullname').val();
		var b = $('#email').val();
		var c = $('#url').val();
		var d = $('#comments').val();

		writeup(a, b, c, d);

		// now scroll the page to show what was written
   		$('html, body').animate(
			{ scrollTop: $("#feedback").offset().top }, 500);
    }
});


// format text and write it to the document, at bottom of form
function writeup(a, b, c, d) {
	var sender = a + ' (' + b + ') wrote:<br>';
	var msg = '<p>' + d + '</p>';
	if (c) {
		var url = '<p>Website: <a href="' + c + '">' + c + '</a></p>';
	} else {
		var url = "";
	}
	
	// delete the div if it is already present, so we see only one of these
	$('#feedback').remove();
	
	// add a div containing the data from the form
	// the #feedback styles are in the CSS
	$('#wrapper').append('<div id="feedback">' + sender + msg + url + '</div>');
}



// ----------------------------------------------------------------------------
}); // do not delete
