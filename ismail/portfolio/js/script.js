const navPhoneMenuContainer = document.querySelector("#menu-container");
const navPhoneMenuToggler = document.querySelectorAll(".menu-toggler");
const goToTopBtn = document.querySelector(".gototop");

const toggleHiddenClass = () => {
    navPhoneMenuContainer.classList.toggle("hidden");
}
navPhoneMenuToggler.forEach(menuBtn => menuBtn.addEventListener("click", toggleHiddenClass));

navPhoneMenuContainer.querySelector("ul").addEventListener('click', () => {
    navPhoneMenuContainer.classList.add('hidden');
});
navPhoneMenuContainer.querySelector(".app-brand").addEventListener('click', () => {
    navPhoneMenuContainer.classList.add('hidden');
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight * 1.5) {
        goToTopBtn.style.transform = 'translateY(0)';
    } else {
        goToTopBtn.style.transform = 'translateY(100vh)';
    }
});
