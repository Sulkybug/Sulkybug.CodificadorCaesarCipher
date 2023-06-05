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
const rot = document.getElementById("text");

let count = 0;

reset.addEventListener("click", () => {
  if (count > 0) {
    count--;
    rot.textContent =
      count +
      " " +
      caesarCipheralph[count % 26] +
      " - " +
      caesarCipheralph[(25 + count) % 26];
  } else {
    count = 26;
    rot.textContent =
      count +
      " " +
      caesarCipheralph[count % 26] +
      " - " +
      caesarCipheralph[(25 + count) % 26];
  }
});

boton.addEventListener("click", () => {
  if (count < 26) {
    count++;
    rot.textContent =
      count +
      " " +
      caesarCipheralph[count % 26] +
      " - " +
      caesarCipheralph[(25 + count) % 26];
  } else {
    count = 0;
    rot.textContent =
      count +
      " " +
      caesarCipheralph[count % 26] +
      " - " +
      caesarCipheralph[(25 + count) % 26];
  }
});

const entry = document.querySelector(".entry");
let output = document.getElementById("criptado");
const button2 = document.querySelector(".transform");

button2.addEventListener("click", () => {
  const newValue = entry.value;
  newValue.toString();

  let num = count;

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

  //output.innerHTML = result; // same output
  output.textContent = result;
});

const boton3 = document.querySelector(".translate");

boton3.addEventListener("click", () => {
  const newValue = entry.value;
  newValue.toString();

  let num = count;

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

  output.textContent = result;
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
  navigator.clipboard.writeText(output.textContent);
});
