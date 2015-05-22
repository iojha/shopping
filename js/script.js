$("document").ready(function() {
			// $( "input" )
			//   .keyup(function() {
			//     var value = $(this).val();
			//     $(".list>ol").append("<li><div class='item'>" + value + "</div></li>");
			// 	});

		    $("#btn").click(function() {
		    var value = $('input').val();
		    if ($('.sample').length) {
		    	$('.sample').remove()
		    }	

		    var template = $('#template li');
		    template.find('.item').text(value);
		    
		    $(".list>ol").append(template);
		    $('input').val('');
		    });

		 //   $(".list>ol").append("<li><div class='item'>" + value + "</div></li>");

		    $('.check>i').click(function(){
		    alert('works');
		    });

		    $('.delete>i').click(function(){
		    alert('works!');
		    });
});




// Resources:

// $(".thumbs").sortable({
//     stop: function(event, ui) {
//       $(this).find('.neutral').appendTo("div li:last-of-type");
//     }
// });
	
//		     $('.delete').on('click',(function(){
//		     	$('.list>li').toggle('slow');
//		     })
