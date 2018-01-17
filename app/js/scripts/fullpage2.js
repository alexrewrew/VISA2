(function () {
    "use strict";

    function createFullpage2() {
        $('#fullpage2').fullpage({
            anchors: ['for-partners', 'for-partners-whom', 'for-partners-excursions', 'for-tourists-museums-and-galleries', 'for-tourists-event-companies', 'for-partners-hotels', 'for-partners-statistics', 'for-partners-loyalty-system', 'for-partners-become', 'for-partners-footer'],
            scrollOverflow: true,
            css3: true,
            scrollingSpeed: 1000,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['', '', 'Екскурсійним і туристичним компаніям', 'Музеям та галереям', 'Івент-компаніям', 'Готелям', 'Статистика', 'Система лояльності'],
            onLeave: function (index, nextIndex) {


                switch (index) {
                    case 3:
                        $('.screenshot2-2').removeClass('visible');
                        break;
                    case 4:
                        $('.screenshot2-3').removeClass('visible');
                        break;
                    case 5:
                        $('.screenshot2-4').removeClass('visible');
                        break;
                    case 6:
                        $('.screenshot2-5').removeClass('visible');
                        break;
                    case 7:
                        $('.screenshot2-6').removeClass('visible');
                        break;
                    case 8:
                        $('.screenshot2-7').removeClass('visible');
                        break;
                }

                switch (nextIndex) {
                    case 2:
                        $('.mask2').removeClass('visible');
                        $('#fp-nav').removeClass('visible');
                        break;
                    case 3:
                        $('.mask2').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-2').addClass('visible');
                        break;
                    case 4:
                        $('.mask2').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-3').addClass('visible');
                        break;
                    case 5:
                        $('.mask2').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-4').addClass('visible');
                        break;
                    case 6:
                        $('.mask2').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-5').addClass('visible');
                        break;
                    case 7:
                        $('.mask2').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-6').addClass('visible');
                        break;
                    case 8:
                        $('.mask2').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-7').addClass('visible');
                        break;
                    case 9:
                        $('.mask2').removeClass('visible');
                        $('#fp-nav').removeClass('visible');
                        break;
                }
            },
            afterResize: function () {
                $.fn.fullpage.destroy('all');
                createFullpage2();
            }
        });
    }


    if (window.matchMedia("(min-width: 768px)").matches) {
        createFullpage2();
        $(function () {
            $('.overflow-first').slimScroll({
                height: 'auto'
            });
        });

    }

    var destroy = false;
    $(window).on('load resize', function () {

        if (window.matchMedia("(max-width: 767px)").matches) {
            $.fn.fullpage.destroy('all');
            destroy = true;
        } else if (window.matchMedia("(min-width: 768px)").matches) {

            $('.mask, .mask2, #fp-nav').removeClass('visible');

            if (destroy) {
                createFullpage2();
                destroy = false;
            }

            $(function () {
                $('.overflow-first').slimScroll({
                    height: 'auto'
                });
            });
        }
    });
})();