const toggles = document.querySelectorAll(".toggle");
// "toggle" means to switch a setting, feature, or program between two states 
// (like on/off, or between two different views/programs) using a single action, 
// such as pressing a key or clicking a button, and then pressing/clicking it again 
// to reverse the change.
toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".card");
    card.classList.toggle("active");

    toggle.textContent = card.classList.contains("active")
      ? "Read less"
      : "Read more";
  });
});
