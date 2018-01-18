/**
 * Created by alexrewrew on 09.09.17.
 */

!function () {
    "use strict";

    function s() {
        $("#fullpage").fullpage({
            anchors: ["for-tourists", "for-tourists-about", "for-tourists-places", "for-tourists-tours", "for-tourists-excursions", "for-tourists-tickets-for-events", "for-tourists-tickets-for-transport", "for-tourists-booking", "for-tourists-entertainment", "for-tourists-discounts", "for-tourists-bonuses", "for-tourists-how-it-works", "for-tourists-get-points", "for-tourists-become", "for-tourists-footer"],
            scrollOverflow: !0,
            css3: !0,
            scrollingSpeed: 1e3,
            navigation: !0,
            navigationPosition: "right",
            navigationTooltips: ["", "", "Пам’ятки", "Тури", "Екскурсії", "Квитки на заходи", "Квитки на транспорт", "Бронювання готелів", "Розваги", "Знижки в кафе / ресторанах", "Бонуси за відвідані місця"],
            onLeave: function (s, e) {
                switch (s) {
                    case 3:
                        $(".screenshot1-2").removeClass("visible");
                        break;
                    case 4:
                        $(".screenshot1-3").removeClass("visible");
                        break;
                    case 5:
                        $(".screenshot1-4").removeClass("visible");
                        break;
                    case 6:
                        $(".screenshot1-5").removeClass("visible");
                        break;
                    case 7:
                        $(".screenshot1-6").removeClass("visible");
                        break;
                    case 8:
                        $(".screenshot1-7").removeClass("visible");
                        break;
                    case 9:
                        $(".screenshot1-8").removeClass("visible");
                        break;
                    case 10:
                        $(".screenshot1-9").removeClass("visible");
                        break;
                    case 11:
                        $(".screenshot1-10").removeClass("visible")
                }
                switch (e) {
                    case 2:
                        $(".mask").removeClass("visible"), $("#fp-nav").removeClass("visible");
                        break;
                    case 3:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-2").addClass("visible");
                        break;
                    case 4:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-3").addClass("visible");
                        break;
                    case 5:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-4").addClass("visible");
                        break;
                    case 6:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-5").addClass("visible");
                        break;
                    case 7:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-6").addClass("visible");
                        break;
                    case 8:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-7").addClass("visible");
                        break;
                    case 9:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-8").addClass("visible");
                        break;
                    case 10:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-9").addClass("visible");
                        break;
                    case 11:
                        $(".mask").addClass("visible"), $("#fp-nav").addClass("visible"), $(".screenshot1-10").addClass("visible");
                        break;
                    case 12:
                        $(".mask").removeClass("visible"), $("#fp-nav").removeClass("visible")
                }
            },
            afterResize: function () {
                $.fn.fullpage.destroy("all"), s()
            }
        })
    }

    window.matchMedia("(min-width: 768px)").matches && (s(), $(function () {
        $(".overflow-first").slimScroll({height: "auto"})
    }));
    var e = !1;
    $(window).on("load resize", function () {
        window.matchMedia("(max-width: 767px)").matches ? ($.fn.fullpage.destroy("all"), e = !0) : window.matchMedia("(min-width: 768px)").matches && ($(".mask, .mask2, #fp-nav").removeClass("visible"), e && (s(), e = !1), $(function () {
            $(".overflow-first").slimScroll({height: "auto"})
        }))
    })
}();
