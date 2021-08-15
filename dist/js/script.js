window.addEventListener('DOMContentLoaded', function () {


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

    // сьена цвета кнопки
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

            if (scrolled >= 445) {
                sidepanelscroll.classList.add('sidepanels');
                divider.classList.add('dividers');
                vk.classList.add('icon-vk2');
                instagram.classList.add('icon-instagram2');
                whatsapp.classList.add('icon-whatsapp2');
            } else {
                sidepanelscroll.classList.remove('sidepanels');
                divider.classList.remove('dividers');
                vk.classList.remove('icon-vk2');
                instagram.classList.remove('icon-instagram2');
                whatsapp.classList.remove('icon-whatsapp2');

            }
        });
    }

    const counters = document.querySelectorAll('.skills__ratings-counter'),
          lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });


new WOW().init();

});


