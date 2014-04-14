// Helpful - http://api.jquery.com/val/
// Also -
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

$(document).ready(function() {  // do not delete 
// ----------------------------------------------------------------------------


// this hides a warning paragraph that will otherwise be seen by anyone 
// who does not have JavaScript enabled 
$('.nojs').hide(); 



// get the state abbreviation from the selection in the menu
$('#states').click(function() {
	$('#sel_state').val( $('#states').val() );
	// above: puts val of #states into the text field #sel_state
});

// 

// what happens when form is submitted
$('form').submit(function(e) { 
	e.preventDefault(); // otherwise, submit refreshes the page
	
	// check if they did not select anything
	if ($('#sel_state').val() == "") {
		alert("You must select a state!");
	
	} else {
		var msg = '<p>You have selected ' + 
			$('#states option:selected').text() +
			', and its abbreviation is ' + 
			$('#sel_state').val() + '.</p>';
	}
		
	$('form').append(msg); // write text into document, at bottom of form

});



// ----------------------------------------------------------------------------
}); // do not delete
