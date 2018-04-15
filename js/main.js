$(document).ready(function () {

    var windowSize = $(window).height();

    //scrollify
    $.scrollify({
        section: '.full-height',
    });

    //shuffle text
    $('#text').shuffleText([
        'Web Developer',
        'Politics Obsessor',
        'Digital Designer',
        'Podcast Listener',
        'Photographer',
        'Unicorn Lover',
        'News Consumer'
    ], {loop: true});

    $('#info').css({'transition': 'opacity 1s ease-in', 'opacity': '1'});

    //section text fade in
    $(window).scroll(function () {
        var y = window.scrollY;
        if (y > 0 && y <= windowSize) {
            $('#edu article').css({'transition': 'opacity 0.8s ease-in', 'opacity': '1'});
        } else if (y > windowSize && y <= windowSize * 2) {
            $('#work article').css({'transition': 'opacity 0.8s ease-in', 'opacity': '1'});
        } else if (y > windowSize * 2 && y <= windowSize * 3) {
            $('#skills article').css({'transition': 'opacity 0.8s ease-in', 'opacity': '1'});
        } else if (y > windowSize * 3 && y <= windowSize * 4) {
            $('#interests article').css({'transition': 'opacity 0.8s ease-in', 'opacity': '1'});
        } else if (y > windowSize * 4 && y <= windowSize * 5) {
            $('footer p, footer ul').css({'transition': 'opacity 0.8s ease-in', 'opacity': '1'});
        }
    });



});
