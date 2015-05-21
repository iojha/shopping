$("document").ready(function() {
	// var newP=$("<p>");
	// newP.append=("testing");
//	$("#btn").click(function() {
		$( "input" )
		  .key(function() {
		    var value = $(this).val();
		    	$("#btn").click(function() {
		    		$(".list>ul").append("<li>" + "<.item>" value + "</li>");
				});			
			});
});


