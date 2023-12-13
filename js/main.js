(function ($) {
    "use strict";
    $(document).ready(function () {


        // Toggle Menu
        $('.hamburger-menu').click(function (e) {
            $('.site_header').toggleClass("toggle_menu");
        });


        // When ".menulink" is hovered
        $(".submenu_wrap").hover(
            function () {
                $(".overlay").addClass("show");
            },
            function () {
                $(".overlay").removeClass("show");
            }
        );


        // list active
        $(".accordion-item .menulink_main").click(function() {
            $(".accordion-item .menulink_main").not(this).removeClass("active");
            $(this).toggleClass("active");
          });


    });

})(jQuery);
