const passwordInput = document.getElementById('password');
const toggleBtn = document.querySelector('.toggle-password');

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = '🙈'; // change icon when visible
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = '👁️'; // original icon
  }
});
