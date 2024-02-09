const alphabet = [
  ['A'],
  ['B'],
  ['C'],
  ['D'],
  ['E'],
  ['F'],
  ['G'],
  ['H'],
  ['I'],
  ['J'],
  ['K'],
  ['L'],
  ['M'],
  ['N'],
  ['O'],
  ['P'],
  ['Q'],
  ['R'],
  ['S'],
  ['T'],
  ['U'],
  ['V'],
  ['W'],
  ['X'],
  ['Y'],
  ['Z'],
];

const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const rot = document.getElementById('text');

let count = 0;

subtractButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    rot.textContent =
      count + ' ' + alphabet[count % 26] + ' - ' + alphabet[(25 + count) % 26];
  } else {
    count = 26;
    rot.textContent =
      count + ' ' + alphabet[count % 26] + ' - ' + alphabet[(25 + count) % 26];
  }
});

addButton.addEventListener('click', () => {
  if (count < 26) {
    count++;
    rot.textContent =
      count + ' ' + alphabet[count % 26] + ' - ' + alphabet[(25 + count) % 26];
  } else {
    count = 0;
    rot.textContent =
      count + ' ' + alphabet[count % 26] + ' - ' + alphabet[(25 + count) % 26];
  }
});

const entry = document.querySelector('.entry');
let output = document.getElementById('criptado');
const encryptButton = document.querySelector('.transform');

encryptButton.addEventListener('click', () => {
  const newValue = entry.value;
  newValue.toString();

  let num = count;

  function rot(str, num) {
    let result = '';
    let newstr = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let strRegex = /[^a-zA-Z]+/gm;
      if (strRegex.test(newstr[i])) {
        result += newstr[i];
      }

      for (let j = 0; j < alphabet.length; j++) {
        if (newstr[i] === alphabet[j][0]) {
          result += alphabet[(j + num) % 26];
        }
      }
    }
    return result;
  }

  let result = rot(newValue, num);
  //output.innerHTML = result; // same output
  output.textContent = result;
});

const translateButton = document.querySelector('.translate');

translateButton.addEventListener('click', () => {
  const newValue = entry.value;
  newValue.toString();

  let num = count;

  function rot(str, num) {
    let result = '';
    let newstr = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let strRegex = /[^a-zA-Z]+/gm;
      if (strRegex.test(newstr[i])) {
        result += newstr[i];
      }

      for (let j = 0; j < alphabet.length; j++) {
        if (newstr[i] === alphabet[j][0]) {
          result += alphabet[(26 + j - num) % 26];
        }
      }
    }
    return result;
  }

  let result = rot(newValue, num);
  output.textContent = result;
});

const deleteButton = document.querySelector('.delete');

deleteButton.addEventListener(
  'click',
  function () {
    entry.value = '';
  },
  false
);

const copyButton = document.getElementById('copy1');

copyButton.addEventListener('click', function (event) {
  //event.preventDefault(); in case button doesnt have the type=button inside the form
  navigator.clipboard.writeText(output.textContent);
});
