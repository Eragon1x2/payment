var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

const burger = document.querySelector('.header_mobile button');
const menu = document.querySelector('.header_burger');
const close = document.querySelector('.header_burger button');
burger.addEventListener('click', onburgerClick)
close.addEventListener('click', onCloseModal)
function onburgerClick(e) {
    menu.style.display = 'flex';
}
function onCloseModal(e) {
    menu.style.display = 'none';
}
