// Helpful - https://api.jquery.com/category/events/form-events/

$(document).ready(function() {  // do not delete 
// ----------------------------------------------------------------------------


// this hides a warning paragraph that will otherwise be seen by anyone 
// who does not have JavaScript enabled 
$('.nojs').hide(); 



$('input[type=text]').blur(function() {
	$(this).val('You left here!');
});

$('input[type=text]').focus(function() {
	$(this).val('You entered here!');
});

$('form').submit(function(e) { 

	e.preventDefault(); // otherwise submit refreshes the page
	
	var a = $('#field1').val();
	var b = $('#field2').val();
	var c = $('#field3').val();
	var d = $('#field4').val();

	// format text and write it to the document, at bottom of div

	$('#wrapper').append('<br>' + a + '<br>');
	$('#wrapper').append(b + '<br>');
	$('#wrapper').append(c + '<br>');
	$('#wrapper').append(d + '<br>');

});



// ----------------------------------------------------------------------------
}); // do not delete
