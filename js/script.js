// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav', 'navbar-extra');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar element
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButttons = document.querySelectorAll('.item-detail-button');

itemDetailButttons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbwp0xHuen4_If4mLXnjtlZHU9mLJil1uMYSne1eHloxx1BuV7R8Xl-s9eYvHE32HqWGzA/exec';
const form = document.forms['brn-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const myAlert = document.querySelector('.ucapan');
const loadingSpinner = document.querySelector('.loading-spinner');

document.querySelector('.contact .close').onclick = (e) => {
  myAlert.style.display = 'none';
  e.preventDefault();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ketika tombol kirim di klik
  // tombol kirim hilang tombol loading tampil
  loadingSpinner.style.display = 'inline-block';
  btnKirim.style.display = 'none';
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      loadingSpinner.style.display = 'none';
      btnKirim.style.display = 'inline-block';
      myAlert.style.display = 'flex';
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
