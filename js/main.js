(function($) {
    "use strict";

    // circle-progress-1
    $('#uiux-progress').circleProgress({
        value: 0.73,
        size: 185,
        fill: "#6928d9",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(73 * progress) + '<i>%</i>');
    });

    // circle-progress-2
    $('#development-progress').circleProgress({
        value: 0.85,
        size: 185,
        fill: "#1573ff",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(85 * progress) + '<i>%</i>');
    });

    // circle-progress-3
    $('#branding-progress').circleProgress({
        value: 0.48,
        size: 185,
        fill: "#16ffdb",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(48 * progress) + '<i>%</i>');
    });

    // circle-progress-4
    $('#design-progress').circleProgress({
        value: 0.69,
        size: 185,
        fill: "#baff26",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(69 * progress) + '<i>%</i>');
    });

    // Isotope-Filtering
    // init Isotope
    var $grid = $('.portfolio-grid').isotope({
        itemSelector: '.portfolio-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    });
    // filter items on button click
    $('.portfolio-menu').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // active JS
    $('.portfolio-menu li').on('click', function() {
        $('li').removeClass('active');
        $(this).addClass('active')
    });


    //sponsor-slider
    $('.sponsor-brand').slick({
        slidesToShow: 5,
        arrows: false,
    });

})(jQuery);