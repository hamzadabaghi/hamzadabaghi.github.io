const navPhoneMenuContainer = document.querySelector("#menu-container")
const navPhoneMenuToggler = document.querySelectorAll(".menu-toggler");

const toggleHiddenClass = () => {
    navPhoneMenuContainer.classList.toggle("hidden");
}
navPhoneMenuToggler.forEach(menuBtn => menuBtn.addEventListener("click" , toggleHiddenClass));

navPhoneMenuContainer.querySelector("ul").addEventListener('click' , ()=>{
    navPhoneMenuContainer.classList.add('hidden')
})
navPhoneMenuContainer.querySelector(".app-brand").addEventListener('click' , ()=>{
    navPhoneMenuContainer.classList.add('hidden')
})