document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const audio = new Audio('/audio/click-sound.mp3');
    const circleImage = document.querySelector('.circle-overlay');
    const circleHalfWidth = circleImage.clientWidth / 2;
    const menu = document.querySelector('.menu');
    const tagUl = document.querySelector('ul');
    navLinks[0].classList.add('active');
  
    function resetActiveLinks() {
      navLinks.forEach(navLink => navLink.classList.remove('active'));
    }
  
    function setCirclePosition(link) {
      const linkPosition = link.getBoundingClientRect();
      const linkCenterX = linkPosition.left + link.offsetWidth / 2;
      circleImage.style.left = `${linkCenterX - circleHalfWidth}px`;
    }
  
    function animateCircle() {
      circleImage.classList.add('animate__animated', 'animate__shakeX');
      setTimeout(() => {
        circleImage.classList.remove('animate__animated', 'animate__shakeX');
      }, 1000);
    }
  
    function handleLinkClick(link) {
      audio.currentTime = 0;
      resetActiveLinks();
      setCirclePosition(link);
      link.classList.add('active');
      animateCircle();
      audio.play();
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        handleLinkClick(link);
      });
    });

    menu.addEventListener('click', () => {
      if (tagUl.style.visibility === 'hidden') {
        tagUl.style.visibility = 'visible';
        circleImage.style.visibility = 'visible';
      } else {
        tagUl.style.visibility = 'hidden';
        circleImage.style.visibility = 'hidden';
      }
    })
    
  });
  

