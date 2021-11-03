'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnClose = document.querySelector('.close-modal');
const btnOpens = document.querySelectorAll('.show-modal');

function removeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// Add Event Listener
btnOpens.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});
// Remove hidden class
btnClose.addEventListener('click', () => {
  removeModal();
});

overlay.addEventListener('click', () => {
  removeModal();
});

window.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    removeModal();
  }
});
