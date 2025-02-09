$(document).ready(function() {
    $('#animateButton').click(function() {
      $('#textElement').text(function(_, text) {
        return text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase();
      });

      $('#textElement').animate({
        left: '+=50px',
        top: '+=70px'
      }, 500, function() {
        $(this).css('font-weight', 'bold');

        $(this).animate({
          left: '-=20px',
          top: '+=80px'
        }, 500, function() {
          $(this).css('text-decoration', 'underline');

          $(this).fadeOut(1000);
        });
      });
    });
  });