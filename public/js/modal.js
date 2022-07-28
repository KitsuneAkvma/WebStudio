// Modal contact-form window
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('isHidden');
  }
})();

var brugerRefs = {
  openBurgerBtn: document.querySelector('[burger-open]'),
  closeBurgerBtn: document.querySelector('[burger-close]'),
  burgerMenu: document.querySelector('[burger-widnow'),
};

// Burger Menu
/*
brugerRefs.openBurgerBtn.addEventListener('click', toggleBurger);
brugerRefs.closeBurgerBtn.addEventListener('click', toggleBurger);

function toggleBurger() {
  brugerRefs.navbar__burger.setAttribute('[burger-close]');
  brugerRefs.navbar__burger.removeAttribute('[burger-open]');
  brugerRefs.burger - window.classList.toggle('isHidden');
}
*/
