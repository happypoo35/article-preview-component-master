const popup = document.querySelector(".popup");
const shareBtn = document.querySelector(".share");

shareBtn.addEventListener('click', e => {
  shareBtn.classList.toggle('active');
  popup.classList.toggle('active');
})