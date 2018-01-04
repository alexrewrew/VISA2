(function () {
    "use strict";

    function createFullpage() {
        $('#fullpage').fullpage({
            scrollOverflow: true,
            css3: true,
            scrollingSpeed: 1000,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['', 'Пам’ятки', 'Тури', 'Екскурсії', 'Квитки на заходи', 'Квитки на транспорт', 'Бронювання готелів', 'Розваги', 'Знижки в кафе / ресторанах', 'Бонуси за відвідані місця'],
            onLeave: function (index, nextIndex) {

                switch (index) {
                    case 2:
                        $('.screenshot1-2').removeClass('visible');
                        break;
                    case 3:
                        $('.screenshot1-3').removeClass('visible');
                        break;
                    case 4:
                        $('.screenshot1-4').removeClass('visible');
                        break;
                    case 5:
                        $('.screenshot1-5').removeClass('visible');
                        break;
                    case 6:
                        $('.screenshot1-6').removeClass('visible');
                        break;
                    case 7:
                        $('.screenshot1-7').removeClass('visible');
                        break;
                    case 8:
                        $('.screenshot1-8').removeClass('visible');
                        break;
                    case 9:
                        $('.screenshot1-9').removeClass('visible');
                        break;
                    case 10:
                        $('.screenshot1-10').removeClass('visible');
                        break;
                }

                switch (nextIndex) {
                    case 1:
                        $('.mask').removeClass('visible');
                        $('#fp-nav').removeClass('visible');
                        break;
                    case 2:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-2').addClass('visible');
                        break;
                    case 3:
                        $('.screenshot1-3').addClass('visible');
                        break;
                    case 4:
                        $('.screenshot1-4').addClass('visible');
                        break;
                    case 5:
                        $('.screenshot1-5').addClass('visible');
                        break;
                    case 6:
                        $('.screenshot1-6').addClass('visible');
                        break;
                    case 7:
                        $('.screenshot1-7').addClass('visible');
                        break;
                    case 8:
                        $('.screenshot1-8').addClass('visible');
                        break;
                    case 9:
                        $('.screenshot1-9').addClass('visible');
                        break;
                    case 10:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot1-10').addClass('visible');
                        break;
                    case 11:
                        $('.mask').removeClass('visible');
                        $('#fp-nav').removeClass('visible');
                        break;
                }
            },
            afterResize: function () {
                $.fn.fullpage.destroy('all');
                createFullpage();
            }
        });
    }


    if (window.matchMedia("(min-width: 768px)").matches) {
        createFullpage();
    }

    var destroy = false;
    $(window).on('load resize', function () {

        if (window.matchMedia("(max-width: 767px)").matches) {
            $.fn.fullpage.destroy('all');
            destroy = true;
        } else if (window.matchMedia("(min-width: 768px)").matches) {

            $('.mask, #fp-nav').removeClass('visible');

            if (destroy) {
                createFullpage();
                destroy = false;
            }

            $(function () {
                $('.overflow-first').slimScroll({
                    height: 'auto'
                });
            });
            $(function () {
                $('.overflow-second').slimScroll({
                    height: 'auto'
                });
            });

        }
    });


    $(document).ready(function () {

        //  ----- FULLPAGE -----


        // $(function () {
        //     $('.overflow-first').slimScroll({
        //         height: 'auto'
        //     });
        // });
        //
        // $(function () {
        //     $('.overflow-second').slimScroll({
        //         height: 'auto'
        //     });
        // });

        $('#menu-trigger').click(function () {
           $('body').toggleClass('open');
           $('.nav-panel').slideToggle();

        });


        $('.button-choice1').hover(function () {
            $('.choice-description1').toggleClass('active');
            $('.choice2').toggleClass('transform');
            $('.button-choice2').toggleClass('opacity');
        });
        $('.button-choice2').hover(function () {
            $('.choice-description2').toggleClass('active');
            $('.choice1').toggleClass('transform');
            $('.button-choice1').toggleClass('opacity');
        });
    });
})();




