$(document).ready(function () {

    $.scrollify({
        section: '.full-height',
    });

    $('#text').ShuffleText([
        'Web Developer',
        'Politics Obsessor',
        'Digital Designer',
        'Podcast Listener',
        'Photographer',
        'Unicorn Lover',
        'News Consumer'
    ], {loop: true});

});
