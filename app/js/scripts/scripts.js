(function () {
    "use strict";

    function createFullpage() {
        $('#fullpage').fullpage({
            // anchors: ['screen1', 'screen2', 'screen3', 'screen4', 'screen5', 'screen6', 'screen7', 'screen8', 'screen9', 'screen10', 'screen11'],
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
        $('#fullpage2').fullpage({
            // anchors: ['screen1', 'screen2', 'screen3', 'screen4', 'screen5', 'screen6', 'screen7', 'screen8', 'screen9', 'screen10', 'screen11'],
            scrollOverflow: true,
            css3: true,
            scrollingSpeed: 1000,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['', 'Екскурсійним і туристичним компаніям', 'Музеям та галереям', 'Івент-компаніям', 'Готелям', 'Статистика', 'Система лояльності'],
            onLeave: function (index, nextIndex) {


                switch (index) {
                    case 2:
                        $('.screenshot2-2').removeClass('visible');
                        break;
                    case 3:
                        $('.screenshot2-3').removeClass('visible');
                        break;
                    case 4:
                        $('.screenshot2-4').removeClass('visible');
                        break;
                    case 5:
                        $('.screenshot2-5').removeClass('visible');
                        break;
                    case 6:
                        $('.screenshot2-6').removeClass('visible');
                        break;
                    case 7:
                        $('.screenshot2-7').removeClass('visible');
                        break;
                }

                switch (nextIndex) {
                    case 1:
                        $('.mask2').removeClass('visible');
                        $('#fp-nav').removeClass('visible');
                        break;
                    case 2:
                        $('.mask').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-2').addClass('visible');
                        break;
                    case 3:
                        $('.screenshot2-3').addClass('visible');
                        break;
                    case 4:
                        $('.screenshot2-4').addClass('visible');
                        break;
                    case 5:
                        $('.screenshot2-5').addClass('visible');
                        break;
                    case 6:
                        $('.screenshot2-6').addClass('visible');
                        break;
                    case 7:
                        $('.mask2').addClass('visible');
                        $('#fp-nav').addClass('visible');
                        $('.screenshot2-7').addClass('visible');
                        break;
                    case 8:
                        $('.mask2').removeClass('visible');
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

        $(".smooth").click(function (event) {
            event.preventDefault();
            var id = $(this).attr("href"),
                top = $(id).offset().top - 70;
            $("body,html").animate({
                scrollTop: top
            }, 1500);
        });

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




