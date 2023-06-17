const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');
const btnTentar = document.querySelector('#btnTentar');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10);
let quantidadeTentativas = 1;
let inputNumero;

// funcao callback
function handleClick(event) {
  event.preventDefault();

   inputNumero = document.querySelector('#inputNumero');
  
  if(Number(inputNumero.value) == randomNumber) {
    tela1.classList.add('hide');
    tela2.classList.remove('hide');

    tela2.querySelector("h2")
            .innerText = `Acertou em ${quantidadeTentativas} tentativas.`;
  }
  quantidadeTentativas++;
}

// Eventos
btnTentar.addEventListener('click', handleClick);

btnReset.addEventListener('click', function(){
  tela1.classList.remove('hide');
  tela2.classList.add('hide');
  quantidadeTentativas = 1;
  randomNumber = Math.round(Math.random() * 10);
  inputNumero.value = 0; 
});