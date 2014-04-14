// Helpful - http://api.jquery.com/scrollTop/
// Also - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea

$(document).ready(function() {  // do not delete 
// ----------------------------------------------------------------------------


// this hides a warning paragraph that will otherwise be seen by anyone 
// who does not have JavaScript enabled 
$('.nojs').hide(); 



$('form').submit(function(e) { 
	e.preventDefault(); // otherwise submit refreshes the page 


	var a = $('#firstname').val();
	var b = $('#lastname').val();
	var c = $('#comments').val();

	writeup(a, b, c);
	
	// now scroll the page to show what was written
    $('html, body').animate(
    	{ scrollTop: $("#feedback").offset().top }, 500);

});

// format text and write it to the document, at bottom of div
function writeup(a, b, c) {
	var sender = a + ' ' + b + ' wrote:<br>';
	var msg = '<p>' + c + '</p>';
	
	// delete the div if it is already present so we see only one of these
	$('#feedback').remove();
	
	// add a div containing the data from the form
	// the #feedback styles are in the CSS
	$('#wrapper').append('<div id="feedback">' + sender + msg + '</div>');
}



// ----------------------------------------------------------------------------
}); // do not delete
