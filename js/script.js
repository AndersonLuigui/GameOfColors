let inputR = document.querySelector('#input-user');
let faseDois = document.querySelector('#next');

inputR.addEventListener('keypress', function(e){
    if(e.which == 13){
        verificaResultado();
      }
    }, false);

function verificaResultado() {
    if (inputR.value === "Roxo" || inputR.value === "roxo") {
        document.getElementById("mensage").innerHTML = ("Parabéns! Você acertou.");
        document.getElementById("resposta-div").style.backgroundColor = ("purple");
        document.getElementById("resposta-div").innerHTML = ("<h1>:)</h1>");
        buttonFase2();
    } else {
        document.getElementById("mensage").innerHTML = ("Não foi dessa vez :/");
    
    }
}

function buttonFase2(){
    document.querySelector('.btn').innerHTML = ('<button id="next"><a href="/pagina2.html">></a></button>');
}

function voltaAoNormal(){
    document.getElementById("resposta-div").innerHTML = ("<h1>?</h1>");
    document.getElementById("resposta-div").style.backgroundColor = ('');
    document.getElementById("mensage").innerHTML = ('');
    inputR.value = ('');
}







