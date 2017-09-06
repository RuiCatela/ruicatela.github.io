
$(document).ready(function() { $('[type="radio"]:not(:checked)').parent().hide();
			     });


$(document).ready(function() { $(".button").text('Mais alternativas');
			     });
/*
$(document).ready(function() {
    $('.maxmin').click(function(event) {
	event.preventDefault();
	if ($(this).text() == '⊞') {
	    $(this).next().find('input[type="radio"]:not(:checked)').parent().show();
	    $(this).text('⊟');
	}
	else
	{
	     $(this).next().find('input[type="radio"]:not(:checked)').parent().hide();
	    $(this).text('⊞');
	}
    });
});
*/


$(document).ready(function() {
    $('.button').click(function(event) {
	event.preventDefault();
	if ($(this).text() == 'Mais alternativas') {
	    $(this).parent().parent().find('input[type="radio"]:not(:checked)').parent().show();
	    $(this).text('Menos');
	}
	else
	{
	    $(this).parent().parent().find('input[type="radio"]:not(:checked)').parent().hide();
	    $(this).text('Mais alternativas');
	}
    });
});



$(document).ready(function(){
      $("input[type=radio]").change(update_price);
      update_price();

      function update_price() {
         var total_price = 0;
         $("input:checked[type=radio]").each(function () {
            total_price += parseInt($(this).attr('price'));
         });
          $('#price span').text(total_price/100 + '€ + 15€(montagem) = ' + (total_price + 1500)/100 + '€');
      }
});
