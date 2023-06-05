/*
  
  Solicitar o nome do aluno e as 3 notas
  calcular a média 
  média positiva maior que 6
  se passou dar parabéns
  se não passou motivar e dar seu melhor na prova de recuperação
  em ambos os casos mostrar nome e a mpta

*/

class Aluno {
  constructor(nome = '', nota_01 = 0, nota_02 = 0, nota_03 = 0) {
    this.nome     = nome;
    this.nota_01  = nota_01;
    this.nota_02  = nota_02;
    this.nota_03  = nota_03;
  }

  get media() {
    return ((this.nota_01 + this.nota_02 + this.nota_03 ) / 3);
  }

  dados() {
    alert(`Aluno ${this.nome} atingiu a média ${this.media.toFixed(2)}.`);
  }

  passou(media = 6) {
    if(this.media > media) alert('Parabéns você passou!');
    else alert('Infelizmente não atingiu a média, estude e irá conseguir passar na recuperação. Você é capaz!');
  }
}

let aluno_01 = new Aluno();

const dadosAluno = () => {
  const aluno = new Aluno();

  /* Receber nome */
  let chave = false;
  do {
    try {
      aluno.nome = prompt("Informe o nome");
      if(aluno.nome.trim() == '') {
        chave = true;
        throw "Nome inválido, informe novamente.";
      } 
      else chave = false;
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  } while (chave);

  /* Primeira nota */
  do {
    chave = false;
    try {
      aluno.nota_01 = receberNotas('Informe a primeira nota');
    } catch (error) {
      alert(`Erro: ${error}`);
      chave = true;
    }
  } while(chave)

  /* Segunda nota */
  do {
    chave = false;
    try {
      aluno.nota_02 = receberNotas('Informe a Segunda nota');
    } catch (error) {
      alert(`Erro: ${error}`);
      chave = true;
    }
  } while(chave)

  /* Terceira nota */
  do {
    chave = false;
    try {
      aluno.nota_03 = receberNotas('Informe a Terceira nota');
    } catch (error) {
      alert(`Erro: ${error}`);
      chave = true;
    }
  } while(chave)

  return aluno;
};

const receberNotas = (texto = 'Informe a nota') => {
  let nota = 0;

  nota = Number(prompt(texto).trim());

  if(nota  == '') throw 'Campo vazio, tente novamente.';
  else if(isNaN(nota)) throw 'Valor infomado não é numerico';
  return nota;
};

aluno_01 = dadosAluno();
aluno_01.passou();
aluno_01.dados();