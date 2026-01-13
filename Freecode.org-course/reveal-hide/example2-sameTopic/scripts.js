const toggleBtn = document.querySelector('.toggle-btn');
const contentBox = document.querySelector('.content-box');

toggleBtn.addEventListener('click', () => {
  contentBox.classList.toggle('active'); // toggle active class

  if (contentBox.classList.contains('active')) {
    toggleBtn.textContent = 'Hide Content'; // change button text
  } else {
    toggleBtn.textContent = 'Reveal More';  // revert button text
  }
});
