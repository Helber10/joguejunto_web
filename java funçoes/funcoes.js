const btnMenu = document.getElementById("btn-menu");
function toggleMenu() {
  if (Event.type === "touchstart") Event.preventDefault;

  const div = document.getElementById("nav");
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);
