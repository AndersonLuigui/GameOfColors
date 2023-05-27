let inputr = document.getElementById("input-user");

resposta.addEventListener('click', function(e) {
    if (inputr.value === "Roxo" || inputr.value === "roxo") {
        document.getElementById("mensage").innerHTML = ("Parabéns! Você acertou.");
        document.getElementById("resposta-div").style.backgroundColor = ("purple");
        document.getElementById("resposta-div").innerHTML = ("<h1>:)</h1>");
    } else {
        document.getElementById("mensage").innerHTML = ("Você errou! Tente novamente.");
        document.getElementById("resposta-div").innerHTML = ("<h1>?</h1>");
        document.getElementById("resposta-div").style.backgroundColor = ("white");
    e.preventDefault();
    }

});






