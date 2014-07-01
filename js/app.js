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

	//Deal with selected options depending on current page
	if($anchor.parent().hasClass("selected")) {
		$option.prop("selected", true);
	}
	//option's value is the href
	$option.val($anchor.attr("href"));
	//option's text is the text of links
	$option.text($anchor.text());
	//append option to select
	$select.append($option);
});

//Bind change lister to select to button
$select.change(function(){
	//go to select's location
	window.location = $select.val();
});


