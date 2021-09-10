window.addEventListener('DOMContentLoaded', function () {
    "user strict";

    // смена цвета к иконок соцсети
    // let color = document.querySelectorAll('.colors');

    // for (let i = 0; i < color.length; i++) {
    //     color[i].addEventListener('mouseover', function () {
    //         this.setAttribute("style", "color:green;");
    //     });
    //     color[i].addEventListener('mouseout', function () {
    //         this.setAttribute("style", "color:black;");
    //     });
    // }

    // ! сьена цвета кнопки

    let btn = document.querySelectorAll('.btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('mouseover', function () {
            this.setAttribute("style", "background:green;");
        });
        btn[i].addEventListener('mouseout', function () {
            this.setAttribute("style", "background:none;");
        });
    }


    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close'),
        arrowUp = document.querySelector('.arrow-up'),
        arrowDown = document.querySelector('.arrow-down'),
        containers = document.querySelector('.nones'),
        sidepanel = document.querySelector('.sidepanel'),
        hamburgers = document.querySelector('.hamburger'),
        menuNone = document.querySelectorAll('.menu__link > a'),
        bodys = document.querySelector('body');


    hamburger.addEventListener('click', function () {
        bodys.setAttribute("style", "overflow:hidden;");
        menu.classList.add('active');
        arrowUp.classList.add('none');
        arrowDown.classList.add('none');
        containers.classList.add('none');
        sidepanel.classList.add('none');
        hamburgers.classList.add('none');

    });
    close.addEventListener('click', function () {
        bodys.setAttribute("style", "overflow:none;");
        menu.classList.remove('active');
        arrowUp.classList.remove('none');
        arrowDown.classList.remove('none');
        containers.classList.remove('none');
        sidepanel.classList.remove('none');
        hamburgers.classList.remove('none');
    });

    for (let i = 0; i < menuNone.length; i++) {
        menuNone[i].addEventListener('click', function () {
            bodys.setAttribute("style", "overflow:none;");
            menu.classList.remove('active');
            arrowUp.classList.remove('none');
            arrowDown.classList.remove('none');
            containers.classList.remove('none');
            sidepanel.classList.remove('none');
            hamburgers.classList.remove('none');

        });
    }

    // ! изменение цвета sidepanel

    const sidepanelscroll = document.querySelector('.sidepanel');
    const divider = document.querySelector('.sidepanel__divider');
    const vk = document.querySelector('.icon-vk1');
    const instagram = document.querySelector('.icon-instagram');
    const whatsapp = document.querySelector('.icon-whatsapp');

    if (sidepanelscroll) {
        sidepanelscroll.addEventListener('click', function name() {
            window.scrollTo({
                top: 100,
                behavior: 'smooth',
            });
        });

        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;


            if (scrolled >= 190) {
                sidepanelscroll.classList.add('sidepanels');
            } else {
                sidepanelscroll.classList.remove('sidepanels');

            }

            if (scrolled >= 295) {
                divider.classList.add('dividers');
            } else {
                divider.classList.remove('dividers');

            }

            if (scrolled >= 300) {
                whatsapp.classList.add('icon-whatsapp2');
            } else {
                whatsapp.classList.remove('icon-whatsapp2');
            }

            if (scrolled >= 320) {
                instagram.classList.add('icon-instagram2');
            } else {
                instagram.classList.remove('icon-instagram2');

            }

            if (scrolled >= 350) {
                vk.classList.add('icon-vk2');
            } else {
                vk.classList.remove('icon-vk2');

            }

        });
    }


    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // ! изменение цвета hamburger

    const hamburg = document.querySelector('.hamburger');

    if (hamburg) {
        hamburg.addEventListener('click', function name() {
            Event.preventDefault();
            window.scrollTo({
                top: 100,
                behavior: 'smooth',
            });
        });

        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;

            if (scrolled >= 625) {
                hamburg.classList.add('hamburger-green');
            } else {
                hamburg.classList.remove('hamburger-green');
            }
        });
    }


    // ! Валидация 

    let validateForms = function (selector, rules, successModal, yaGoal) {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function (form) {
                let formData = new FormData(form);
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log('отправлено');
                        }
                    }
                };
                xhr.open('POST', 'mailer/smart.php', true);
                xhr.send(formData);

                form.reset();
            }
        });
    };
    validateForms('.contacts__form', {

        text: {
            required: true,
        },
        checkbox: {
            required: true,
        }
    }, 'thanks-popup', 'send goal');




    new WOW().init();

});


