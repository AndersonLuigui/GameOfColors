const inputUser = document.querySelector('#input-user');
const inputUser2 = document.querySelector('#input-user2');


/* inputUser.addEventListener('keypress', e => {
    if(e.keyCode === 13){
        faseUm();
        e.preventDefault();
        inputUser.removeEventListener('click', e);
    }

}); */



inputUser2.addEventListener('keypress', e => {
    if(e.keyCode === 13) {
        faseDois();
    }
})

function buttonFase2(){
    document.querySelector('.btn').innerHTML = ('<button id="next"><a href="/pagina2.html">></a></button>');
}


function faseUm() {
    if(inputUser.value === 'roxo' || inputUser.value === 'Roxo'){
        document.getElementById("mensage").innerHTML = ("Parabéns! Você acertou.");
        document.getElementById("resposta-div").style.backgroundColor = ("purple");
        document.getElementById("resposta-div").innerHTML = ("<h1>:)</h1>");
        buttonFase2();

    } else {
        document.getElementById("mensage").innerHTML = ("Não foi dessa vez :/");
    } 
}


function faseDois() {
    if(inputUser2.value === 'laranja' || inputUser2.value === 'Laranja'){
        document.getElementById("mensage").innerHTML = ("Parabéns! Você acertou.");
        document.getElementById("resposta-div").style.backgroundColor = ("orange");
        document.getElementById("resposta-div").innerHTML = ("<h1>:)</h1>");
    } else {
        document.getElementById("mensage").innerHTML = ("Não foi dessa vez :/");
    } 
}


function voltaAoNormal(){
    document.getElementById("resposta-div").innerHTML = ("<h1>?</h1>");
    document.getElementById("resposta-div").style.backgroundColor = ('');
    document.getElementById("mensage").innerHTML = ('');
    inputR.value = ('');
}

