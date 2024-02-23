// Animate smooth scrolling
$('#viwe-work').on('click', function(){
   const image =$('#images').position().top;

    $('html, body').animate({scrollTop:image}, 1000);
});