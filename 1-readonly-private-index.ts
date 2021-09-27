interface Icachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

type IcachorroSomenteLeitura = {
  +readonly [k in keyof Icachorro]-?: Icachorro[k] // -? -> remove o status de opcional
}

class MeuCachorro implements Icachorro {
  idade;
  nome;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Spock', 7);


/*
const meuCachorro: Icachorro = {
  nome: 'Spock',
  idade: 7,
} */
