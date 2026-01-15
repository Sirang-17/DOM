const loginBox = document.getElementById("loginBox");
const dashboard = document.getElementById("dashboard");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const remember = document.getElementById("remember");

function checkLogin() {
  if (
    localStorage.getItem("loggedIn") === "true" ||
    sessionStorage.getItem("loggedIn") === "true"
  ) {
    loginBox.classList.add("hidden");
    dashboard.classList.remove("hidden");
  }
}

loginBtn.addEventListener("click", () => {
  if (remember.checked) {
    localStorage.setItem("loggedIn", "true");
  } else {
    sessionStorage.setItem("loggedIn", "true");
  }

  checkLogin();
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  sessionStorage.removeItem("loggedIn");

  dashboard.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

checkLogin();
