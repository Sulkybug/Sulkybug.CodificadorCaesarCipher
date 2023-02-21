const caesarCipheralph = [
  ["A"],
  ["B"],
  ["C"],
  ["D"],
  ["E"],
  ["F"],
  ["G"],
  ["H"],
  ["I"],
  ["J"],
  ["K"],
  ["L"],
  ["M"],
  ["N"],
  ["O"],
  ["P"],
  ["Q"],
  ["R"],
  ["S"],
  ["T"],
  ["U"],
  ["V"],
  ["W"],
  ["X"],
  ["Y"],
  ["Z"],
];

const boton = document.querySelector(".add");
const reset = document.querySelector(".subtract");
const variador = document.getElementById("text");

let contador = 0;

reset.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    variador.textContent =
      contador +
      " " +
      caesarCipheralph[contador % 26] +
      " - " +
      caesarCipheralph[(25 + contador) % 26];
  } else {
    contador = 26;
    variador.textContent =
      contador +
      " " +
      caesarCipheralph[contador % 26] +
      " - " +
      caesarCipheralph[(25 + contador) % 26];
  }
});

boton.addEventListener("click", () => {
  if (contador < 26) {
    contador++;
    variador.textContent =
      contador +
      " " +
      caesarCipheralph[contador % 26] +
      " - " +
      caesarCipheralph[(25 + contador) % 26];
  } else {
    contador = 0;
    variador.textContent =
      contador +
      " " +
      caesarCipheralph[contador % 26] +
      " - " +
      caesarCipheralph[(25 + contador) % 26];
  }
});

const entry = document.querySelector(".entry");
let salida = document.getElementById("criptado");
const boton2 = document.querySelector(".transform");

boton2.addEventListener("click", () => {
  const newValue = entry.value;
  newValue.toString();

  let num = contador;

  function rot(str, num) {
    let result = "";
    let newstr = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let strRegex = /[^a-zA-Z]+/gm;
      if (strRegex.test(newstr[i])) {
        result += newstr[i];
      }

      for (let j = 0; j < caesarCipheralph.length; j++) {
        if (newstr[i] === caesarCipheralph[j][0]) {
          result += caesarCipheralph[(j + num) % 26];
        }
      }
    }
    return result;
  }

  let result = rot(newValue, num);

  //salida.innerHTML = result; // same output
  salida.textContent = result;
});

const boton3 = document.querySelector(".translate");

boton3.addEventListener("click", () => {
  const newValue = entry.value;
  newValue.toString();

  let num = contador;

  function rot(str, num) {
    let result = "";
    let newstr = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let strRegex = /[^a-zA-Z]+/gm;
      if (strRegex.test(newstr[i])) {
        result += newstr[i];
      }

      for (let j = 0; j < caesarCipheralph.length; j++) {
        if (newstr[i] === caesarCipheralph[j][0]) {
          result += caesarCipheralph[(26 + j - num) % 26];
        }
      }
    }
    return result;
  }

  let result = rot(newValue, num);

  salida.textContent = result;
});

const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener(
  "click",
  function () {
    entry.value = "";
  },
  false
);

const copyButton = document.getElementById("copy1");

copyButton.addEventListener("click", function (event) {
  //event.preventDefault(); in case button doesnt have the type=button inside the form
  navigator.clipboard.writeText(salida.textContent);
});
