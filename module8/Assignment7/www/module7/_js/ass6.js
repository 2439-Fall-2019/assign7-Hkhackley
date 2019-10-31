
$("#testBtn").click(function() {
	var itemToAdd = $.trim($("#additem").val());
	if(itemToAdd == "") return;
	$("#theList").append("<li>"+itemToAdd+"</li>");
	$("#theList").listview("refresh");
});