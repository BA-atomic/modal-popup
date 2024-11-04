let openBtn = document.getElementById('open-btn');
let closeModalBtn = document.getElementById('closeModalBtn');
let modalBox = document.getElementById('modal-box');

openBtn.addEventListener('click', () => {
  modalBox.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modalBox.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalBox) {
    modalBox.style.display = 'none';
  }
})