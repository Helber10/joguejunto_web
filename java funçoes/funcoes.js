const btnMenu = document.getElementById("btn-menu");
function toggleMenu() {
  if (Event.type === "touchstart") Event.preventDefault;

  const div = document.getElementById("nav");
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);

//simula login///


function tipoLogin() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username === "@email" && password === "1234") {
    window.location.href = "escolhaesporte.html";
     alert("Você Esta logado");
  } else {
    alert("Você não Esta logado");
  }
}
//fim///

 // validar cadastro//

 