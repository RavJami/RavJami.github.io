/*--NAV SHOW HIDE---*/

var navLinks = document.getElementById("navLinks");

function showMenu() {

    navLinks.style.right = "0";
  }

function hideMenu() {

    navLinks.style.right = "-200px";
}

//scroll to footer

// get the contact link element
const contactLink = document.getElementById('contact-link');
const helpLink = document.getElementById('help-link');
// add click event listener to the contact link
contactLink.addEventListener('click', (event) => {
  // prevent default link behavior
  event.preventDefault();

  // get the footer element by ID
  const footer = document.getElementById('footer');

  // scroll to the footer element
  footer.scrollIntoView({ behavior: 'smooth' });
});

helpLink.addEventListener('click', (event) => {
  // prevent default link behavior
  event.preventDefault();

  // get the footer element by ID
  const footer = document.getElementById('footer');

  // scroll to the footer element
  footer.scrollIntoView({ behavior: 'smooth' });
});


/*sllider settings*/

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

