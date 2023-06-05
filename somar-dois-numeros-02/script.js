/*
  SOMAR DOIS NÚMEROS MELHORADO
*/
const capturaNumero = (frase = 'Informe um número') => {
  do {
    try {
      let numeroRecebido = Number(prompt(frase));
      if(isNaN(numeroRecebido)) throw "O valor informado não é um número. Tente novamente.";
      else return numeroRecebido;
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  } while(true);
}

let numero_1 = capturaNumero('Informe o primeiro número');
let numero_2 = capturaNumero();
alert(`A soma de ${numero_1} e ${numero_2} é ${numero_1 + numero_2}`);