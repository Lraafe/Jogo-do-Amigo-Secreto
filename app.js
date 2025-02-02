var nomesSorteados = [];
var nomesSorteadosM = [];

function coletarNomes(){
    var nomes = document.querySelector("input").value;
    if(nomes == ""){
        alert("Por favor, insira um nome.");
    }else{  
        nomesSorteados.push(nomes);
        nomesSorteadosM.push(nomes);
        document.querySelector("input").value = "";
    }
}

function atualizarLista(){
    var lista = document.getElementById("listaAmigos");
    var listaHtml = document.createElement("li");

    listaHtml.textContent = nomesSorteadosM;
    lista.appendChild(listaHtml);
    nomesSorteadosM.pop();
}

function sortear(){
    var numeroAleatorio;

    if(nomesSorteados.length > 1){
        numeroAleatorio = Math.floor(Math.random() * nomesSorteados.length);
        var resultadoDoJogo = document.querySelector("h2");
        resultadoDoJogo.innerHTML = `O seu amigo secreto -> ${nomesSorteados[numeroAleatorio]}`;
    }else{
        alert("Você não tem amigos o suficiente");
    }
}