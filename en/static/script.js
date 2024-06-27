$(document).ready(function() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    const sections = $('section');
    sections.waypoint(function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('fade-in');
        }
    }, { offset: '75%' });
});

const css = `
.fade-in {
    opacity: 1;
    transition: opacity 1s ease-in;
}

section {
    opacity: 0;
}
`;
$('<style>').prop('type', 'text/css').html(css).appendTo('head');