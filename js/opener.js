const botones = [
  document.getElementById("boton1"),
  document.getElementById("boton2"),
  document.getElementById("boton3"),
  document.getElementById("boton4"),
  document.getElementById("boton5"),
];
const boton6 = document.getElementById("boton6");

const caracteristicas = [
  "location=no",
  "location=no",
  "width=420,height=430,location=no,menubar=no,status=yes,resizable=yes",
  "width=600,height=300,left=150,location=no,menubar=no,status=no,resizable=no,titlebar=no,toolbar=no",
  "location=no,fullscreen=yes",
];

let ventanas = [];

function abrirVentana(boton, carac = "location=no") {
  let creador = boton.id;
  let texto = boton.innerText;
  let v;
  ventanas.push(
    (v = window.open(
      `opener2.html?creador=${creador}&soy=${texto}`,
      "_blank",
      carac
    ))
  );
  if (creador === "boton5") v.resizeTo(screen.width, screen.height);
}

botones.forEach((boton, i) => {
  boton.addEventListener("click", () => {
    if (i === 0) boton.disabled = true;
    abrirVentana(boton, caracteristicas[i]);
  });
});

boton6.addEventListener("click", () => {
  ventanas.forEach((ventana) => ventana.close());
  ventanas = [];
});
