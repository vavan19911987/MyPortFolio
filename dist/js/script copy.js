window.addEventListener('DOMContentLoaded', function () {

    // 'user strict';

    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controls: false,
        speed: 1300,
        responsive: {
            320: {
                nav: true
            },
            992: {
                nav: true
            },
        }

    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    // ! TABS

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
                .index()).addClass('catalog__content_active');
    });

    function toggleSlider(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSlider('.catalog-item__link');
    toggleSlider('.catalog-item__back');


    // ! MODAL WINDOW


    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_tabs').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    // ! VALIDATE

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }

            },
            messages: {
                name: "Пожалуйста введите своё Имя",
                phone: "Пожалуйста введите свой телефон",
                email: {
                    required: "Пожалуйста введите свой постовый адрес",
                    email: "Неправильно введён адрес почты"
                }
            }
        });
    }

    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form'); 

    //  ! MASK

    $('input[name=phone]').mask("+7(999) 999-99-99");


    $('form').submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
          }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize(),
        }).done(function () {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');


            $('form').trigger('reset');
        });
        return false;
        

    });

    // ! Smooth scroll and pageup


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    new WOW().init();






});