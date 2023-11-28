const navPhoneMenuContainer = document.querySelector("#menu-container")
const navPhoneMenuToggler = document.querySelector("#menu-toggler");

const toggleHiddenClass = () => navPhoneMenuContainer.classList.toggle("hidden");
navPhoneMenuToggler.addEventListener("click" , toggleHiddenClass)