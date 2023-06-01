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
console.log(`ARRAY
---------`);

console.table([
  "Leite"
  , "Ovos"
  , 2
  , 3
])