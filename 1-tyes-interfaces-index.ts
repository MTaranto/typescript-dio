/*
function soma(a: number, b: number) {
  return a + b; 
}
soma('a', 'b') // typescript ja retorna que está com erro antes de executar
*/

// types
// interfaces

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
//  executarRugido(volumeEmDecibeis: number): void; 
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'Cachorro',
  porte: 'médio',
  tipo: 'terrestre',
//  visaoNoturna: true,
}

// const animal: IAnimal = {
//  nome: 'Elefante',
//  tipo: 'terrestre',
//  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis} db`)
// }

/*
const felino: IFelino = {
  nome: 'Pantera',
  tipo: 'terrestre',
  visaoNoturna: true,
} */

// animal.executarRugido('s')
// retorna -> O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2345)
