const passwordInput = document.getElementById('password');
const toggleBtn = document.querySelector('.toggle-password');
const eyeIcon = toggleBtn.querySelector('.eye-icon');

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    // change icon to eye-off
    eyeIcon.innerHTML = `<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7 1.78-3.07 4.62-5.48 8.06-6.36m3.88.88l2.12 2.12M1 1l22 22"/>`;
  } else {
    passwordInput.type = 'password';
    // revert to original eye icon
    eyeIcon.innerHTML = `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
                         <circle cx="12" cy="12" r="3"/>`;
  }
});
