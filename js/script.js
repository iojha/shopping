$("document").ready(function() {


		    $('#btn').on('click', function() {

			    var value = $('input').val();
			    if ($('.sample').length) {
			    	$('.sample').remove()
			   	}

			//FOR BLANK INPUT
				if (value === '') {
			   	alert("You haven't entered anything to add");
			   	
			   	} else {

			    var template = $('#template li'); //Hidden list from which items are being appended to li.sample list
			    template.addClass('unchecked');
			    template.find('.item').text(value);
			  	console.log(template);

			    $('.list>ol').append(template);	 
			   	$('input').val('');
			   }
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

		     	//Length of unchecked is == 1 because #template is always on page and has unchecked class
		    	if ($('.list .unchecked').length == 1){ 
		    		alert("YAY! You bought everything on your list!");
		    	}

		    });



		    // APPEND 	
		    //  $('ol').append(currentItem);
		    //	$(move).css('color','red');
		    //	$('ol').append(currentItem);
		    
		    

		    $('#clear-checked-btn').on('click', function(){
		    	if ($('.checked').length >= 1){
		    		$('.checked').remove();
		    	} else {
		    		alert("You don't currently have any items checked-off.");
		    	}
		    });

  			
  			//Clear button
				$('#clear-all-btn').on('click', function() {
		    	$('.list>ol').empty();
		    });

			
});
/*

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
