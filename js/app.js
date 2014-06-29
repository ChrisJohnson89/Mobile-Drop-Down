//Problem: It looks gross in smaller smaller browser widths and small devices
//Solution: to hide the text links and use a more appropriate navagation 

//Create and select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
		//Create an option
	var $option = $("<option></option>");

	//option's value is the href
	$option.val($anchor.attr("href"));
	//option's text is the text of links
	$option.text($anchor.text());
	//append option to select
	$select.append($option);
});
	//Create an option
	//option's value is the href
	//option's text is the text of links
	//append option to select
//Create button to click to go to select's location
//Bind click to button
	//go to select's location
// Modify Css to hide links on small screen and show button and selectt
	//Also hides select and button on larger width and show's links
//Deal with selected options depending on current page