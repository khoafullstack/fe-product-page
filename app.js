const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });
    tab.classList.add('is-active');

    const target = tab.getAttribute('data-target');

    tabContentBoxes.forEach((tabContentBox) => {
        if(tabContentBox.getAttribute('id') === target) {
          tabContentBox.classList.remove('is-hidden');
        } else {
          tabContentBox.classList.add('is-hidden');
        }
    });
})})

const signInButton = document.querySelector('#signin-btn');
const modal = document.querySelector('.modal');
const modelBg = document.querySelector('.modal-background');
signInButton.addEventListener('click', () => {
  modal.classList.toggle('is-active');
});

modelBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});