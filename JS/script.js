console.log('Bem vindos ao Starter!');

console.log('COMENTÁRIOS');
console.log(`// texto ou /* texto */`);
// Comentário de uma linha

/*
Comentário de multiplas linhas
*/

console.log(`
Aspas 
Duplas

${1 + 25}

`);


console.log(`
NUMEROS
--------
33       -> inteiro
12.5     -> real - float
NaN      -> Not a Number
Infinith -> infinito
`); 

console.log(12 / 'oi');
console.log(5 / 0);

/*
  OBJETO
*/
console.log(`OBJETO
--------
`);

console.table({
  name: 'Manoel'
  , idade: 98
  , estudar: function() {
    console.log('Amo');
  }
});

/*
  Array
*/
console.log(
`ARRAY
---------`
);

console.table([
  "Leite"
  , "Ovos"
  , 2
  , 3
]);


/*
  VARIÁVEIS
*/

console.log(`
VARIAVEIS
----------`);

var clima = "Quente";
console.log(clima);

clima = "Frio";
console.log(clima);

clima = "Frio";
console.log(clima);


const chuva = "Forte";
console.log('chuva: ', chuva);

// chuva = 'fraca';
// console.log('chuva: ', chuva);


/*
  TIPO DA VARIÁVEL
*/
console.log(`

TIPO DA VARIÁVEL
------------------`);

let teste = 'vida';
console.log(typeof teste);

teste = 123;
console.log(typeof teste); 

teste = true;
console.log(typeof teste);

teste = {
  cor: 'branca',
  idade: 50
};
console.log(typeof teste);


/*
  OBJETO
*/
console.log(`

OBJETO
---------`);

const pessoa = {
  nome: 'John',
  idade: 30,
  peso: 88.6,
  isAdmin: true
};

console.table(pessoa);

console.log("Nome: ", pessoa.nome);


/*
  EXERCÍCIO
*/
console.log(`

EXERCÍCIO
---------

1. Declare uma variável de nome Weight.
2. Que tipo de dado é a variável acima?
3. Declare uma variável e atribua valores para da um dos dados:
  - name: String;
  - age: Number (integer)
  - stars: Number (float)
  - isSubscribed: Boolean
`);

let weight; 
console.log(typeof weight);

const homem = {
  name          : "João Paulo",
  age           : 55,
  stars         : 18.5,
  isSubscribed  : false,
  weight        : 80
};

console.table(homem);

console.log('Name: '          , typeof homem.name         );
console.log('Age: '           , typeof homem.age          );
console.log('Stars: '         , typeof homem.stars        );
console.log('IsSubscribed: '  , typeof homem.isSubscribed );

console.log(`
Homem:
======
Name          : ${homem.name}
Age           : ${homem.age}
Stars         : ${homem.stars}
IsSubscribed  : ${homem.isSubscribed}
Weight        : ${homem.weight}

`);

console.log(`${homem.name} de idade ${homem.age} anos pesa ${homem.weight} kg.`);

let students = [];
console.log(typeof students);
console.log(students);

students = [homem];
console.log(students);
console.log(students[0]);

const maria = {
  name          : "Maria Joaquina",
  age           : 25,
  stars         : 28.5,
  isSubscribed  : true,
  weight        : 55
};

students = [students[0], maria];
console.log(students);


/*
  FUNÇÕES
*/
console.log(`

FUNÇÕES
---------

Arrow Function

`);

const funcao01 = function() {
  console.log('Função 01');
};

const funcao02 = () => {
  console.log('Função 02');
};

funcao01();
funcao02();

const funcao03 = (nome) => {
  console.log('Função 03: ', nome);
};

funcao03('Gertrudes');


function Pessoa(nome) {
  this.nome = nome;
  this.andar = () => {
    return this.nome + ' está andando.';
  }
}

const joao = new Pessoa('João Marcos');
console.log(joao.andar()); 


/*
  CONVERSÃO
*/
console.log(`

CONVERSÃO
-----------

`);

console.log(typeof Number("123"));
console.log(typeof String(123));

/*
  QUEBRA COM DUAS CASAS DECIMAIS
*/
let numero = 123.456789123;
console.log(numero);

console.log(Number(numero.toFixed(2)));

/*
Quantidade de palavras
*/
let palavras = "Eu quero viver o Amor!";
console.log(palavras.split(' ').length);


/*
  CATCH
*/
console.log(`

CATCH
-----------

`);

function meuNome(nome = '') {
  if(nome === '') {
    throw 'Nome é Obrigatório, volte.!';
  }
  console.log('Nome: ', nome);
}

try {
  meuNome();
} catch (e) {
  // console.log(e);
}