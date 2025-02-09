$(document).ready(function() {
    function animateText() {
        var text = $('#animated-text').text();
        $('#animated-text').empty(); 
        var chars = text.split('');
        
        for (var i = 0; i < chars.length; i++) {
            $('#animated-text').append('<span>' + chars[i] + '</span>');
        }

        var index = 0;
        function animate() {
            if (index < chars.length) {
                var span = $('#animated-text span').eq(index);

                span.css({
                    'color': getRandomColor(),
                    'font-size': getRandomSize() + 'px'
                });

                setTimeout(function() {
                    span.css({
                        'color': 'inherit', 
                        'font-size': 'inherit' 
                    });
                }, 500); 

                index++;
                setTimeout(animate, 600);
            }
        }

        animate(); 
    }

    function getRandomColor() {
        var colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#FF69B4', '#8A2BE2'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomSize() {
        return Math.floor(Math.random() * 10) + 20; 
    }

    animateText(); 
});
