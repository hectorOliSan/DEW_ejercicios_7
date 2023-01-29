const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

const url = window.location.search;
const parametros = new URLSearchParams(url);

boton1.addEventListener("click", () => {
  alert("Me creó: " + parametros.get("creador"));
});

boton2.addEventListener("click", () => {
  alert("Soy: " + parametros.get("soy"));
});

boton3.addEventListener("click", () => {
  window.close();
});
