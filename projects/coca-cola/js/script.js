fetch('/pages/header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header-placeholder').innerHTML = data;
  populateUi();
  })
.catch(error => console.error('Error loading header:', error));


function populateUi() {
  /**
   * this is for toggling menu
   */
  const navMenu = document.querySelectorAll('.menu');
  const navSheet = document.querySelector('.sheet');

  const audio = new Audio('/audio/click-sound.mp3');
  const currentPath = (window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1)).replace('.html', '');
  /***
   * this is for highlighting the current link
  */
  const currentPaths = document.querySelectorAll(`.nav-link.${currentPath}-link`);
  currentPaths.forEach((link) => { 
    link.classList.add('active');
  })
  /**
   * selecting two menu's here
   * first is the header one and second is the one on the sheet
   */
  navMenu.forEach((menu) => {
    menu.addEventListener('click', () => {
      navSheet.classList.toggle('show');
    });
  })
  audio.play()
}