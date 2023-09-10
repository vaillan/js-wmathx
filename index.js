// Import stylesheets
import './style.css';

//variable globales
let listNums1;
let listNums2;
let listNums3;

let listaNumerosCompletos = [];
let listaNumerosPares = [];
let listaNumerosImpares = [];

//Inicio de logica principal
document.getElementById('c').addEventListener('click', onInit);

function onInit(e) {
  listNums1 = [];
  listNums2 = [];
  listNums3 = [];
  let numeroMenor = document.getElementById('num1').value;
  let numeroMayor = document.getElementById('num2').value;
  generarListas(numeroMenor, numeroMayor);
  setAlert();
}

/**
 * Genera listas
 * 
 * @param {number} numeroMenor
 * @param {number} numeroMayor
 * @returns {void}
 */
function generarListas(numeroMenor, numeroMayor) {
  for (let i = +Number(numeroMenor); i <= +Number(numeroMayor); i++) {
    listNums1.push(i);
    if (i % 2 === 0) {
      //Pares
      listNums2.push(i);
    } else {
      //Impares
      listNums3.push(i);
    }
  }

  //Ordenamiento de valores
  listaNumerosCompletos = listNums1.sort(function (a, b) {
    return a - b;
  });
  listaNumerosPares = listNums2.sort(function (a, b) {
    return b - a;
  });
  listaNumerosImpares = listNums3.sort(function (a, b) {
    return b - a;
  });
}

/**
 * Función para mostrar resultado
 * @return {void}
 */
function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');

  alert.innerHTML = `
    <div class="text-break">
      <p>Lista de numeros completos: [${listaNumerosCompletos.toLocaleString()}]</p>
      <p>Lista de numeros pares: [${listaNumerosPares.toLocaleString()}]</p>
      <p>Lista de numeros impares: [${listaNumerosImpares.toLocaleString()}]</p>
    </deiv>
  `;
}
