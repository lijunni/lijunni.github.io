$(document).ready(function() {
    "use strict";

    /***************************************************************************/
    /* NAVIGATION  */
    /***************************************************************************/

    $('.button-collapse').sideNav();

    /**************************************************************************
     SKILL BAR
     **************************************************************************/

    $(".determinate").each(function(){
        var width = $(this).text();
        $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');
    });



    /*************************************************************************
     TOOLTIP
     **************************************************************************/
    $('.tooltipped').tooltip({delay: 50});

    /**************************************************************************
     WOW INIT
     **************************************************************************/

    var wow = new WOW({ mobile: false });
    wow.init();

    $('#portfolio-item').mixItUp();
    $("#lightgallery").lightGallery();

    $('#index-back-button').on('click', function (event) {
        $('.full-portfolio').hide();
        $('.experience').show();
        $('html, body').animate({scrollTop:0}, 'fast');
    });
    $('#back-button-bottom').on('click', function (event) {
        $('.full-portfolio').hide();
        $('.experience').show();
        $('html, body').animate({scrollTop:0}, 'fast');
    });

    $('#portfolio-button').on('click', function (event) {
        $('.experience').hide();
        $('.full-portfolio').show();
        $('html, body').animate({scrollTop:0}, 'fast');
    });
});