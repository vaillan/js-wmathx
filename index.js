// Import stylesheets
import './style.css';

let listNums1;
let listNums2;
let listNums3;

document.getElementById('c').addEventListener('click', onInit);

function onInit(e) {
  listNums1 = [];
  listNums2 = [];
  listNums3 = [];
  let numeroMenor = document.getElementById('num1').value;
  let numeroMayor = document.getElementById('num2').value;
  generarListas(numeroMenor, numeroMayor);
}

function generarListas(numeroMenor, numeroMayor) {
  for (let i = +Number(numeroMenor); i <= numeroMayor; i++) {
    listNums1.push(i);
    if (i % 2 === 0) {
      //Pares
      listNums2.push(i);
    } else {
      //Impares
      listNums3.push(i);
    }
  }

  let listaNumerosCompletos = listNums1.sort(function (a, b) {
    return a - b;
  });
  let listaNumerosPares = listNums2.sort(function (a, b) {
    return b - a;
  });
  let listaNumerosImpares = listNums3.sort(function (a, b) {
    return b - a;
  });

  console.log(listaNumerosCompletos, listaNumerosPares, listaNumerosImpares);
}
