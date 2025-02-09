$(document).ready(function() {
    // завдання 1
    $('.text').mouseenter(function() {
        $(this).css({
          'font-style': 'italic',
          'text-align': 'center',
          'left': '50%',
          'transform': 'translateX(-50%)',
        });
      })

    // завдання 2
    $('#greenBox').css({
      'bottom': '-200px'
    });

    $('#greenBox').animate({
      'bottom': '50%', 
      'width': '100px', 
      'height': '100px' 
    }, 1500, 'swing', function() {
      $(this).animate({
        'left': '0'
      }, 1000);
    });

    // завдання 3
    $('#addKeywordCheckbox').change(function() {
      if ($(this).is(':checked')) {
        $('#keywordField').slideDown(); 
      } else {
        $('#keywordField').slideUp();
      }
    });
  });