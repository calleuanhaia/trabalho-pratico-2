const nameInput = document.querySelector("#name-input");
const txtName = document.querySelector("#txt-name");
const cogumelo = document.querySelector("#cogumelo");
const flordefogo = document.querySelector("#flordefogo");
const ovoyoshi = document.querySelector("#ovoyoshi");
const penacapa = document.querySelector("#penacapa");
const charimg = document.querySelector('#char-img');
const scoretxt = document.querySelector('#score-txt');

nameInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        txtName.innerText=nameInput.value;
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
    if(!charimg.classList.contains('char-img') || !charimg.classList.contains('char-img1') || !charimg.classList.contains('char-img2')){
        charimg.classList.add('char-imgy');
        charimg.classList.remove('char-img2');
        charimg.classList.remove('char-img1');
        charimg.classList.remove('char-img');
    }
});