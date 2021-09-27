/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
//  console.log('Digitei');
const i = event.currentTarget as HTMLInputElement;
console.log(i.value);
}) */

// Generic types

function adicionaApendiceALista<T>(array: any[], valor: T) {
  return array.map(item => item + valor);
}

adicionaApendiceALista(['A', 'B', 'C'], 'd');