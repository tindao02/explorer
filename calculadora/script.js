/*
  Operações matemáticas 

  - Capturar 2 números
  - fazer as operações matemática (+ - * / %)

*/
let valorDigitado = null;
let operacao = null;
let total = 0;
do {

  try {
    valorDigitado = prompt(`
    Valor atual: ${total} ${operacao != null ? operacao : ''} 
    
    Informe o próximo valor`).trim();

    switch(valorDigitado) 
    {
      case '+':
        operacao = '+';
      break;

      case '-':
        operacao = '-';
      break;

      case '*':
        operacao = '*';
      break;

      case '/':
        operacao = '/';
      break;

      case '%':
        operacao = '%';
      break;

      case '':
        valorDigitado = 'a';
      break;
      
      case 'X':
      case 'x':
        valorDigitado = 'X';
      break;

      default:
        valorDigitado =  Number(valorDigitado);
      break;
    }

    if(!isNaN(valorDigitado)) {
      if (operacao == null) total = valorDigitado;
      else if(operacao != null) {
        
        switch(operacao) {
          case '+': 
            total += valorDigitado;
            break;
          case '-': 
            total -= valorDigitado;
            break;
          case '*': 
            total *= valorDigitado;
            break;
          case '/': 
            total /= valorDigitado;
            break;
          case '%': 
            total %= valorDigitado;
            break;
        }
        operacao = null;
      }
    }
    
  } catch (e) {}
} while (valorDigitado.toUpperCase() != 'X');