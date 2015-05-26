$("document").ready(function() {
			// $( "input" )
			//   .keyup(function() {
			//     var value = $(this).val();
			//     $(".list>ol").append("<li><div class='item'>" + value + "</div></li>");
			// 	});

		    $("#btn").on('click', function() {
			    var value = $('input').val();
			    if ($('.sample').length) {
			    	$('.sample').remove()
			   	}

			    var template = $('#template li');
			    template.addClass('unchecked');
			    template.find('.item').text(value);
			    
			    $(".list>ol").append(template);	 
			   	$('input').val('');
			});

		    //Delete item
		    $('.delete>i').on('click', function(){
		    	$(this).closest('li').remove();
		    });

		    //Checked item red & at bottom of list
					    
		    $('.check>i').on('click', function(){
		     	var currentItem = $(this).closest('li');
		     	if (currentItem.hasClass('unchecked')) {
		     		currentItem.removeClass('unchecked');
		     		currentItem.addClass('checked');
		     	} else {
		     		currentItem.removeClass('checked');
		     		currentItem.addClass('unchecked');
		     	}

		    // 	$('ol').append(currentItem);
		    //	$(move).css('color','red');
		    //	$('ol').append(currentItem);
			});
});

/*		    	checked.find('.item').text(template.find('.item').val());
		    	template.remove();

		    	$('.list>ol').append(checked);
		    	checked.css('color','red');
		    });

*/




//
// $(document).ready(function(){
//    $('ul.list').find('li.special').appendTo('ul.list');
// });




/*    $(document).keyup(function (e){
    	if (e.keyCode == 88)
    	$('#btn').css();
    	$('.ryu-ready').show();
})

		   	$('#btn').attr('disabled',true);
			$('input').keyup(function() {
   				if($(this).val().length ===0)
   					$('#btn').attr('disabled', false);
   				else
   					$('#btn').attr('disabled',true);
   				});

*/


//$('ul').on('click', 'li', function() { code... });



// Resources:

// $(".thumbs").sortable({
//     stop: function(event, ui) {
//       $(this).find('.neutral').appendTo("div li:last-of-type");
//     }
// });
	
//		     $('.delete').on('click',(function(){
//		     	$('.list>li').toggle('slow');
//		     })
