(function () {
    "use strict";

    function createFullpage1() {
        $('#fullpage').fullpage({
            anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11', 'section12', 'section13'],
            scrollOverflow: true,
            css3: true,
            scrollingSpeed: 1000,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['', '', 'Пам’ятки', 'Тури', 'Екскурсії', 'Квитки на заходи', 'Квитки на транспорт', 'Бронювання готелів', 'Розваги', 'Знижки в кафе / ресторанах', 'Бонуси за відвідані місця'],
            onLeave: function (index, nextIndex) {

                switch (index) {
                    case 3:
                        $('.screenshot1-2').removeClass('visible');
                        break;
                    case 4:
                        $('.screenshot1-3').removeClass('visible');
                        break;
                    case 5:
                        $('.screenshot1-4').removeClass('visible');
                        break;
                    case 6:
                        $('.screenshot1-5').removeClass('visible');
                        break;
                    case 7:
                        $('.screenshot1-6').removeClass('visible');
                        break;
                    case 8:
                        $('.screenshot1-7').removeClass('visible');
                        break;
                    case 9:
                        $('.screenshot1-8').removeClass('visible');
                        break;
                    case 10:
                        $('.screenshot1-9').removeClass('visible');
                        break;
                    case 11:
                        $('.screenshot1-10').removeClass('visible');
                        break;
                }

                switch (nextIndex) {
                    case 2:
                        $('.mask').removeClass('visible');
                        $('#fp-nav').removeClass('visible');
                        break;
                    case 3:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-2').addClass('visible');
                        break;
                    case 4:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-3').addClass('visible');
                        break;
                    case 5:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-4').addClass('visible');
                        break;
                    case 6:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-5').addClass('visible');
                        break;
                    case 7:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-6').addClass('visible');
                        break;
                    case 8:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-7').addClass('visible');
                        break;
                    case 9:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-8').addClass('visible');
                        break;
                    case 10:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-9').addClass('visible');
                        break;
                    case 11:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-10').addClass('visible');
                        break;
                    case 12:
                        $('.mask').removeClass('visible');
                        $('#fp-nav').removeClass('visible');
                        break;
                }
            },
            afterResize: function () {
                $.fn.fullpage.destroy('all');
                createFullpage1();
            }
        });
    }


    if (window.matchMedia("(min-width: 768px)").matches) {
        createFullpage1();
    }

    var destroy = false;
    $(window).on('load resize', function () {

        if (window.matchMedia("(max-width: 767px)").matches) {
            $.fn.fullpage.destroy('all');
            destroy = true;
        } else if (window.matchMedia("(min-width: 768px)").matches) {

            $('.mask, .mask2, #fp-nav').removeClass('visible');

            if (destroy) {
                createFullpage1();
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