(function () {
    "use strict";


    $(document).ready(function () {

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

        $(function () {
            $('.overflow-first').slimScroll({
                height: 'auto'
            });
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




