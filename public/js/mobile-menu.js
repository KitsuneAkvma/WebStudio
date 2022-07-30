const burgerRefs = {
  burgerBtn: document.querySelector('.navbar__burger'),
  burgerWindow: document.querySelector('.burger-window'),
};

burgerRefs.burgerBtn.addEventListener('click', () => {
  burgerRefs.burgerBtn.classList.toggle('active');
  burgerRefs.burgerBtn.classList.toggle('fixed-btn--burger');
  burgerRefs.burgerWindow.classList.toggle('isHidden');
});

document.querySelectorAll('.burger-window__nav-list__item').forEach(n =>
  n.addEventListener('click', () => {
    burgerRefs.burgerBtn.classList.remove('active');
    burgerRefs.burgerBtn.classList.remove('fixed-btn--burger');
    burgerRefs.burgerWindow.classList.remove('isHidden');
  })
);
