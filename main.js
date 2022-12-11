$(document).ready(function() {
    // dark mode and light mode starts here!!
   $('.switch-mode').click(function () {
    $('.oval').toggleClass('active');
    $('body').toggleClass('dark');

    $('.filter-section').toggleClass('dark');
    $('.filter-text').toggleClass('light');
    $('.location-text').toggleClass('light');
    $('.fulltime-text').toggleClass('light');
    $('.checkbox').toggleClass('light');
   });
});