// Modal contact-form window

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

// Burger Menu

const burgerRefs = {
  burgerBtn: document.querySelector('.navbar__burger'),
  burgerWindow: document.querySelector('.burger-window'),
};

burgerRefs.burgerBtn.addEventListener('click', () => {
  burgerRefs.burgerBtn.classList.toggle('active');
  burgerRefs.burgerWindow.classList.toggle('isHidden');
});

document.querySelectorAll('.burger-window__nav-list__item').forEach(n =>
  n.addEventListener('click', () => {
    burgerRefs.burgerBtn.classList.remove('active');
    burgerRefs.burgerWindow.classList.remove('isHidden');
  })
);
