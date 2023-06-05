/*
  SOMAR DOIS NÚMEROS
*/
let numero_1 = 0;
do {
  try {
    numero_1 = Number(prompt("Informe o primeiro número"));
    if(isNaN(numero_1)) throw "O valor informado não é um número. Tente novamente.";
  } catch (error) {
    alert(`Erro: ${error}`);
  }
} while(isNaN(numero_1));

let numero_2 = 0;
do {
  try {
    numero_2 = Number(prompt("Informe o segundo número"));
    if(isNaN(numero_2)) throw "O valor informado não é um número. Tente novamente.";
  } catch (error) {
    alert(`Erro: ${error}`);
  }
} while(isNaN(numero_2));

alert(`A soma de ${numero_1} e ${numero_2} é ${numero_1 + numero_2}`);