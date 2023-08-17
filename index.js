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

/**
 * Función para mostrar etiqueta de montos
 * @return {void}
 */
function setAlert() {
  let formatoMoneda = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');

  alert.innerHTML = `
  <p>Sub-total: 
    <span class="badge text-bg-secondary">${formatoMoneda.format(
      subtotal
    )}</span>
  </p>
  
  <p>Descuento aplicado: 
    <span class="badge text-bg-success">${formatoMoneda.format(
      descuento
    )}</span>
  </p>
 
  <p>Total a pagar:
    <span class="badge text-bg-success">${formatoMoneda.format(total)}</span>
  </p>

  <p>Porcentaje descuento:
    <span class="badge text-bg-warning">${porcentajeAplicado}%</span>
  </p>
  `;
}
