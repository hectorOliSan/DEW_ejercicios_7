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
for (let i = 0; i < images.length; i++) {
  galeria.innerHTML += `<img id='image${i}' src='${dir + images[i]}.gif'
    alt='${images[i].replace(".gif", ".jpg")}' class='image rounded'>`;

  document.getElementById("image" + i).onclick = () =>
    (window.location.href = "miniaturas2.html?image=" + images[i]);
}

const imagenes = document.querySelectorAll(".image");
imagenes.forEach((imagen, i) => {
  imagen.addEventListener(
    "click",
    () => (window.location.href = "miniaturas2.html?image=" + images[i])
  );
});
