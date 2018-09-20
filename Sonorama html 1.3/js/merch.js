/* Dynamic Window Ajax Content */
"use strict";

var $actualMerch = null;
var obertMerch = false;
$(".open-merch").click(function () {
    obreMerch($(this).attr('id'));
    $actualMerch = $(this);
});

function obreMerch(quin) {
    $.ajax({
        url: quin,
        success: function (data) {
            $('.project-content-merch').html(data);
            $(".project-content-merch").hide(0)
            $('.project-window-merch').hide(0)
            tancaMerch();
            $("html, body").animate({ scrollTop: $('#project-show-merch').offset().top - (200) }, 300, function () {
                $('.project-window-merch').show(0);
                $('.project-window-merch').css('height', '0');
                $('.project-window-merch').animate({ height: 550 }, 500, function () {
                    $('.project-window-merch').css('height', 550); /*$('.project-window').css('height','auto');*/
                    $(".project-content-merch").fadeIn("slow");
                });
            });
        }
    });
}

function tancaMerch() {
    $(".close-btn").click(function () {
        $(".project-window-merch").slideUp("slow");
        $(".project-content-merch").fadeOut("slow");
        $("html, body").animate({ scrollTop: $('#anchor05').offset().top - (50) }, 1000);
        obertMerch = false;
    });
}