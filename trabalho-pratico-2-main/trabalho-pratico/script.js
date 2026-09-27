const nameInput = document.querySelector("#name-input");
const txtName = document.querySelector("#txt-name");
const cogumelo = document.querySelector("#cogumelo");
const flordefogo = document.querySelector("#flordefogo");
const ovoyoshi = document.querySelector("#ovoyoshi");
const penacapa = document.querySelector("#penacapa");
const charimg = document.querySelector('#char-img');
const scoretxt = document.querySelector('#score-txt');
const estrela = document.querySelector('.star');
const btnIniciar = document.querySelector('#btn-iniciar');
const timerLabel = document.querySelector('.timer-txt');
const charinterface = document.querySelector('.char-interface');

nameInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        txtName.innerText=nameInput.value;
        nameInput.value = " ";
        nameInput.disabled = true;
    };
});

cogumelo.addEventListener('click',()=>{
    charimg.classList.remove('char-imgy');
    charimg.classList.remove('char-img2');
    charimg.classList.remove('char-img1');
    charimg.classList.add('char-img');
});

flordefogo.addEventListener('click',()=>{
    charimg.classList.remove('char-imgy');
    charimg.classList.remove('char-img2');
    charimg.classList.add('char-img1');
    charimg.classList.remove('char-img');
});

penacapa.addEventListener('click',()=>{
    charimg.classList.remove('char-imgy');
    charimg.classList.add('char-img2');
    charimg.classList.remove('char-img1');
    charimg.classList.remove('char-img');
});

ovoyoshi.addEventListener('click',()=>{
    if(charimg.classList.contains('char-img') || charimg.classList.contains('char-img1') || charimg.classList.contains('char-img2') || charimg.classList.contains('char-imgy')){
        charimg.classList.add('char-imgy');
        charimg.classList.remove('char-img2');
        charimg.classList.remove('char-img1');
        charimg.classList.remove('char-img');
    } else{
        charimg.classList.remove('char-imgy');
        charimg.classList.remove('char-img2');
        charimg.classList.remove('char-img1');
        charimg.classList.remove('char-img');
    }
});

charinterface.addEventListener('click',()=>{
    charinterface.classList.toggle('char-interface2');
});

estrela.addEventListener('click', () => {
    scoreAcumulado++;
    scoretxt.innerText = `SCORE: ${scoreAcumulado}`;
});

let scoreAcumulado = 0;
let tempoRestante = 100;
let intervaloTimer;
let jogoRodando = false;

estrela.addEventListener('click', () => {
    scoreAcumulado++;
    scoretxt.innerText = `SCORE: ${scoreAcumulado}`;
});

if (btnIniciar) {
    btnIniciar.addEventListener('click', () => {
        if (jogoRodando) return; 

        jogoRodando = true;
        tempoRestante = 100;
        scoreAcumulado = 0;
        scoretxt.innerText = `SCORE: ${scoreAcumulado}`;
        
        timerLabel.style.display = 'block';
        timerLabel.innerText = `TIMER: ${tempoRestante}`;
        btnIniciar.style.display = 'none';

        intervaloTimer = setInterval(() => {
            tempoRestante--;
            timerLabel.innerText = `TIMER: ${tempoRestante}`;

            if (scoreAcumulado >= 100) {
                clearInterval(intervaloTimer);
                jogoRodando = false;
                alert("VOCÊ GANHOU! Atingiu 100 pontos a tempo!");
                btnIniciar.style.display = 'block';
                timerLabel.style.display = 'none';
            } 
            else if (tempoRestante <= 0) {
                clearInterval(intervaloTimer);
                jogoRodando = false;
                alert("TEMPO ESGOTADO! Você perdeu seus poderes e voltou a ser pequeno.");
                
                charimg.classList.remove('char-img', 'char-img1', 'char-img2', 'char-imgy');
                
                btnIniciar.style.display = 'block';
                timerLabel.style.display = 'none';
            }
        }, 1000);
    });
}