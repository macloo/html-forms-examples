// helpful - http://api.jquery.com/val/

$(document).ready(function() {  // do not delete 
// ----------------------------------------------------------------------------


// this hides a warning paragraph that will otherwise be seen by anyone 
// who does not have JavaScript enabled 
$('.nojs').hide(); 


// display an alert every time you click a radio button
$('input[type=radio]').click(function(e) {
	alert("You clicked " + $(this).val());
});


// what happens when form is submitted
$('form').submit(function(e) { 
	e.preventDefault(); // otherwise, submit refreshes the page

	var msg = '<p>You have selected <em>size:</em> ' + 
		$('input[name=size]:checked').val() +
		' and <em>length:</em> ' +
		$('input[name=length]:checked').val() +
		' for your pants.';

	$('form').append(msg); // write text into document, at bottom of form

});



// ----------------------------------------------------------------------------
}); // do not delete
