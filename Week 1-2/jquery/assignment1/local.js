// JavaScript Document
$(document).ready(function() {

		$("#addclass span").click(function() {
		  	$(this).addClass("expand");
	});
	
		$("#after span").on("click", function() {
			$("#after p").after('Thunderwear');
		});
		
		$("#append span").on("click", function() {
			$("#append p").append("I don't have a clue");
		});
		
		$("#attr span").on("click", function() {
			$("#attr img").attr("width", "500");
		});
		
		$("#before span").on("click", function() {
			$("#before p").before("We’ve begun to long for the pitter-patter of little feet, so we bought a dog. ");
		});
		
		$("#htmllink span").on("click", function() {
			$('#htmllink').html('Something Else');
		});

		$("#textlink span").on("click", function() {
			$('#textlink ul li').text('Cuteness!!!');
		});
		
		//store all selected values in an array then append them to the paragraph value
		function displayValues() {
			var values = $("#ice-cream-flavors").val() || [];
			$("p.value-display").html("<b> Ice Cream Flavors You Like </b>" + values.join(" , "));	
		}
		
		$("select").change(displayValues);
		displayValues();
		
		$('#hide .hide').click(function() {
			$('#hide img').hide();
		});
		
		$('#hide .show').click(function() {
			$('#hide img').show();
		});


		$('#toggle button').click(function() {
			$('#toggle img').toggle("slow", function() {

			});
		});

		$('#slideDown button').click(function() {
			var sliding = $('#slideDown div');
			if(sliding.is(':hidden')) {
				sliding.slideDown("slow");
				}else{
					sliding.hide();
				}

		});

		$('#slideToggle').click(function(){
			var sliding = $('#slideToggle div');
			sliding.slideToggle('slow');
		});

		$('#slideUp button').on('click', function(){
			if( $('#slideUp div').is(':hidden') == false){
				$('#slideUp div').slideUp();
			}
			else {
				$('#slideUp div').show();
			}
		});

		$('#fadeIn button').on('click', function(){
			
			$('#fadeIn p').fadeIn('4000');
		});

		$('#fadeOut button').on('click', function(){
			$('#fadeOut p').fadeOut('4000');
		});

		$('#focus input').focus(function(){

			$(this).next('span').css("display", "block").fadeOut(3000);
		});

		 $('#data p').data("foo", 30);
		$('#data p').data("bar", { myType: "test", counting: 20});
		$('#data span').text($('#data p').data("bar").myType);
		

});