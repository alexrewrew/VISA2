!function(){"use strict";function s(){$("#fullpage2").fullpage({anchors:["for-partners","for-partners-whom","for-partners-excursions","for-tourists-museums-and-galleries","for-tourists-event-companies","for-partners-hotels","for-partners-statistics","for-partners-loyalty-system","for-partners-become","for-partners-footer"],scrollOverflow:!0,css3:!0,scrollingSpeed:1e3,navigation:!0,navigationPosition:"right",navigationTooltips:["","","Екскурсійним і туристичним компаніям","Музеям та галереям","Івент-компаніям","Готелям","Статистика","Система лояльності"],onLeave:function(s,e){switch(s){case 3:$(".screenshot2-2").removeClass("visible");break;case 4:$(".screenshot2-3").removeClass("visible");break;case 5:$(".screenshot2-4").removeClass("visible");break;case 6:$(".screenshot2-5").removeClass("visible");break;case 7:$(".screenshot2-6").removeClass("visible");break;case 8:$(".screenshot2-7").removeClass("visible")}switch(e){case 2:$(".mask2").removeClass("visible"),$("#fp-nav").removeClass("visible");break;case 3:$(".mask2").addClass("visible"),$("#fp-nav").addClass("visible"),$(".screenshot2-2").addClass("visible");break;case 4:$(".mask2").addClass("visible"),$("#fp-nav").addClass("visible"),$(".screenshot2-3").addClass("visible");break;case 5:$(".mask2").addClass("visible"),$("#fp-nav").addClass("visible"),$(".screenshot2-4").addClass("visible");break;case 6:$(".mask2").addClass("visible"),$("#fp-nav").addClass("visible"),$(".screenshot2-5").addClass("visible");break;case 7:$(".mask2").addClass("visible"),$("#fp-nav").addClass("visible"),$(".screenshot2-6").addClass("visible");break;case 8:$(".mask2").addClass("visible"),$("#fp-nav").addClass("visible"),$(".screenshot2-7").addClass("visible");break;case 9:$(".mask2").removeClass("visible"),$("#fp-nav").removeClass("visible")}},afterResize:function(){$.fn.fullpage.destroy("all"),s()}})}window.matchMedia("(min-width: 768px)").matches&&s();var e=!1;$(window).on("load resize",function(){window.matchMedia("(max-width: 767px)").matches?($.fn.fullpage.destroy("all"),e=!0):window.matchMedia("(min-width: 768px)").matches&&($(".mask, .mask2, #fp-nav").removeClass("visible"),e&&(s(),e=!1),$(function(){$(".overflow-first").slimScroll({height:"auto"})}))})}();