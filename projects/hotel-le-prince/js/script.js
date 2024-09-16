let navbar = document.querySelector('.header .navbar');
let navlink = document.querySelectorAll('.navbar .menu a');

function menuToggle(){
   document.querySelector('#menu-btn').classList.toggle('active');
   navbar.classList.toggle('active');
}

document.querySelector('#menu-btn').addEventListener("click", menuToggle);

for(let i = 0; i < navlink.length; i++){
   navlink[i].addEventListener("click", menuToggle)
}




document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

var swiper = new Swiper(".home-slider", {
   loop: true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay: {
     delay: 4000, // 4 secondes
     disableOnInteraction: false, // Continue l'autoplay même après une interaction
   },
});



var swiper = new Swiper(".gallery-slider", {
   loop: true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
   },
   autoplay: {
     delay: 2000, // 2 secondes
     disableOnInteraction: false, // Continue l'autoplay même après une interaction
   },
});


var swiper = new Swiper(".reviews-slider", {
   loop:true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});