// Touggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwp0xHuen4_If4mLXnjtlZHU9mLJil1uMYSne1eHloxx1BuV7R8Xl-s9eYvHE32HqWGzA/exec';
const form = document.forms['brn-contact-form'];
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ketika tombol kirim di klik
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      myAlert.classList.toggle('display-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
