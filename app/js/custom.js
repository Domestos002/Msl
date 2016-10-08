$(document).ready(function () {

    if ($('input.data-inputmask, .inputmask-phone').length > 0) {
        $('input.data-inputmask, .inputmask-phone').mask("+7 (999) 999-99-99");
    }

    /*$(document).on("click", '.burger', function(e) {
        $(".header-nav-mobile").toggleClass('hidden');
        e.preventDefault();
    });*/

    $(document).on("click", '.burger', function(e) {
        $('.sliding-panel').addClass('active');
        $('.burger').addClass('active');
        $('body').addClass('ovh');
        e.preventDefault();
    });

    $(document).on("click", '.sliding-panel__close', function(e) {
        $('.sliding-panel').removeClass('active');
        $('.burger').removeClass('active');
        $('body').removeClass('ovh');
        e.preventDefault();
    });

    /*$(document).on("click", '.burger', function(e) {
        $(this).closest(".sliding-panel-item").toggleClass('active');
        $(this).closest(".sliding-panel-item").find('.sliding-panel-dd').stop().slideToggle(400);
        $(this).closest(".sliding-panel-link").toggleClass('active');
        e.preventDefault();
    });
*/

});

