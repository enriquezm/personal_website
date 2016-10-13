$(document).ready(function(){
  console.log("Hello World!");

  $('a[href*="#"]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  // TODO: Figure out how lazy() works
  // $('#lazy-container .lazy').lazy({
  //   appendScroll: $('#lazy-container');
  // });

  // TODO: Make counter smoother
  $(window).scroll(function() {
     var hT = $('#scroll-to').offset().top,
         hH = $('#scroll-to').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
     if (wS > (hT+hH-wH)){
      // $('#scroll-to').fadeIn(3500);

      $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing:'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      });
     }
  });

});
