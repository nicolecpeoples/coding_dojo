$(document).ready(function(){
   $(".img-section img").click(function(){
   	   $(this).hide();
   })

   $("button.restore").click(function(){
   	   $('.img-section img').show();
   })
});