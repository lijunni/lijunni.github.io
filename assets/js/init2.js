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

    $('.sa-view-project-detail').on('click', function(event) {
        event.preventDefault();
        var href          = $(this).attr('href') + ' ' + $(this).attr('data-action'),
            dataShow      = $('#project-gallery-view'),
            dataShowMeta  = $('#project-gallery-view meta'),
            dataHide      = $('#portfolio-item'),
            preLoader     = $('#loader'),
            backBtn       = $('#back-button'),
            filterBtn     = $('#filter-button');

        dataHide.animate( { 'marginLeft':'-120%' }, { duration: 400, queue: false } );
        filterBtn.animate( { 'marginLeft':'-120%' }, { duration: 400, queue: false } );
        dataHide.fadeOut(400);
        filterBtn.fadeOut(400);
        setTimeout( function() { preLoader.show(); }, 400);
        setTimeout( function() {
            dataShow.load( href, function() {
                dataShowMeta.remove();
                preLoader.hide();
                dataShow.fadeIn(600);
                backBtn.fadeIn(600);
            });
        },800);

        $('#index-back-button').on('click', function (event) {
            event.preventDefault();
            var dataShow    = $('#portfolio-item'),
                dataHide    = $('#project-gallery-view'),
                filterBtn   = $('#filter-button');

            $("[data-animate]").each( function() {
                $(this).addClass($(this).attr('data-animate'));
            });

            dataHide.fadeOut(400);
            setTimeout(function(){
                dataShow.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
                filterBtn.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
                dataShow.fadeIn(400);
                filterBtn.fadeIn(400);
            },400);
            setTimeout(function(){
                dataShow.find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp').removeClass('fadeInDown');
            },1500);
            $('#index-back-button').on('click', function (event) {
                $('.full-portfolio').hide();
                $('.experience').show();
                $('html, body').animate({scrollTop:0}, 'fast');
            });
        });
    });

    $('#back-button').on('click', function(event) {
        event.preventDefault();
        var dataShow    = $('#portfolio-item'),
            dataHide    = $('#project-gallery-view'),
            filterBtn   = $('#filter-button');

        $("[data-animate]").each( function() {
            $(this).addClass($(this).attr('data-animate'));
        });

        dataHide.fadeOut(400);
        $(this).fadeOut(400);
        setTimeout(function(){
            dataShow.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
            filterBtn.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
            dataShow.fadeIn(400);
            filterBtn.fadeIn(400);
        },400);
        setTimeout(function(){
            dataShow.find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp').removeClass('fadeInDown');
        },1500);
        $('#index-back-button').on('click', function (event) {
            $('.full-portfolio').hide();
            $('.experience').show();
            $('html, body').animate({scrollTop:0}, 'fast');
        });
    });

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