const nameInput = document.querySelector("#name-input");
const txtName = document.querySelector("#txt-name");

nameInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        txtName.innerText=nameInput.value;
    };
});