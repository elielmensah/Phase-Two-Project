$(document).ready(function() {
    // dark mode and light mode starts here!!
   $('.switch-mode').click(function () {
    $('.oval').toggleClass('active');
    $('body').toggleClass('dark');

    // filter section
    $('.filter-section').toggleClass('dark');
    $('.filter-text').toggleClass('light');
    $('.location-text').toggleClass('light');
    $('.fulltime-text').toggleClass('light');

    // Fulltime checkbox
        $('.checkbox').toggleClass('blue');

    // Job content and description section
    $('.row').toggleClass('dark');
    $('.job-title').toggleClass('light');
   });

//    Hoover state on elements starts here
    $('.search').hover(function () {
        $(this).css('background-color', '#939BF4');
    }, function() {
        $(this).css('background-color', '#5964e0');
    });

    $('button.load-more').hover(function() {
        $(this).css('background-color', '#939BF4');
    }, function() {
        $(this).css('background-color', '#5964e0');
    })

    $('.job-title').toggleClass('dark');
    // Hover state on elements ends here

    $('.checkbox').click(function() {
        $('.checkbox svg').show();
    });

    // Filter section for filtering job content by title,company, expertise or location starts here

    // $('.filter-by-title_company_expertise').on('click', function(event) {
    //     $(currentEventTarget).
    // });
    
});