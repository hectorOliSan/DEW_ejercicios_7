const galeria = document.getElementById("galeria");

const images = [
  "Damaso1",
  "Felo1",
  "Felo2",
  "lujan1",
  "Nestor1",
  "Nestor2",
  "Nestor3",
  "Nestor4",
  "Padron1",
  "Padron2",
];

const dir = "../img/low_resolution/";
images.forEach((imagen) => {
  galeria.innerHTML += `<img id='${imagen}' src='${dir + imagen}.gif'
    alt='${imagen}' class='image rounded'>`;
});

const imagenes = document.querySelectorAll(".image");
imagenes.forEach((imagen, i) => {
  imagen.addEventListener("click", () => {
    window.location.href = `miniaturas2.html?image=${images[i]}`;
  });
});
