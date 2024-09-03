/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function indiceRandom(arreglo) {
    return Math.floor(Math.random() * arreglo.length);
  }

  let iwho = indiceRandom(who);
  console.log(iwho);

  let excusa =
    who[iwho] +
    " " +
    action[indiceRandom(action)] +
    " " +
    what[indiceRandom(what)] +
    " " +
    when[indiceRandom(when)];

  console.log(excusa);

  document.getElementById("excuse").innerHTML = excusa;

  let imgPath = "src/assets/img/rigo-baby.jpg";
  switch (iwho) {
    case 0:
      imgPath = "src/assets/img/dog.jpg";
      break;
    case 1:
      imgPath = "src/assets/img/grandma.png";
      break;
    case 2:
      imgPath = "src/assets/img/mailman.jpg";
      break;
    case 3:
      imgPath = "src/assets/img/bird.jpg";
      break;
  }

  const myImageContainer = document.getElementById("imagen");

  myImageContainer.innerHTML = `<img src="${imgPath}" alt="Imagen">`;
};
