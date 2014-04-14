// Very helpful - http://api.jquery.com/map/
//    "The .map() method is particularly useful for getting or setting the 
//     value of a collection of elements."
// Also - http://api.jquery.com/val/


$(document).ready(function() {  // do not delete 
// ----------------------------------------------------------------------------


// this hides a warning paragraph that will otherwise be seen by anyone 
// who does not have JavaScript enabled 
$('.nojs').hide(); 



// what happens when form is submitted
$('form').submit(function(e) { 
	e.preventDefault(); // otherwise, submit refreshes the page

	// see top of this page for link to info about .map()
	// NOTE: .get() and .join() are working with .map() here
	var toppings_list = $('#toppings input:checkbox:checked')
		.map(function() {
			return $(this).val();
		})
		.get()
		.join( ', ' );
	
	// get value of selected item in the radio button set
	var pizza_size = $('#size input:radio:checked').val();
	
	// put together all the text that will be written into the document
	var msg = '<p>You have selected <em>toppings:</em> ' + 
		toppings_list +
		'<br>and <em>size:</em> ' +
		pizza_size +
		' for your pizza.';

	$('form').append(msg); // write text into document, at bottom of form
	
	console.log(toppings_list); // write the array out to the console

});



// ----------------------------------------------------------------------------
}); // do not delete
