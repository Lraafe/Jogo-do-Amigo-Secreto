let nomesSorteados = [];
let nomesSorteadosM = [];
let usuario, nomeUsuario, nomeUsuarioCopia;

let input = document.querySelector("input")
let h2 = document.querySelector("h2")

function main(){
    subTitulo()
    coletarNomes()
    atualizarLista()
    sessionStorage.setItem("amigos" , nomesSorteados);
}

function subTitulo(){
    nomeUsuario = input.value
    ai = "ai ai ai, o lobo me mordeu"
    if(nomeUsuario && h2.innerHTML == "Digite o seu nome"){
        usuario = true;
        input.value = ""
        nomeUsuarioCopia = nomeUsuario;
        h2.innerHTML = `${nomeUsuarioCopia} digite o nome dos seus amigos`;
    }
}

function coletarNomes(){
    var nomes = input.value;

    if(nomes != ""){
        nomesSorteados.push(nomes);
        nomesSorteadosM.push(nomes);
    }
    //input.value = "";
    console.log(nomesSorteados.length);
    
    if(nomes == nomeUsuarioCopia){
        nomesSorteados.pop(nomes)
        nomesSorteadosM.pop(nomes)
    }
}

function atualizarLista(){
    if(input.value == "" && nomesSorteados.length < 1 && usuario != true){
        alert(`${nomeUsuarioCopia} por favor, insira um nome.`);
    }else if(nomeUsuario == nomeUsuarioCopia){

    }else{
        let lista = document.getElementById("listaAmigos");
        let listaHtml = document.createElement("li");

        input.value = ""
        listaHtml.textContent = nomesSorteadosM;
        lista.appendChild(listaHtml);
        nomesSorteadosM.pop();
    }
}

function sortear(){
    let numeroAleatorio;

    if(nomesSorteados.length > 1){
        numeroAleatorio = Math.floor(Math.random() * nomesSorteados.length);
        let resultadoDoJogo = document.querySelector("h2");
        resultadoDoJogo.innerHTML = `O seu amigo secreto -> ${nomesSorteados[numeroAleatorio]}`;
    }else{
        alert("Você não tem amigos o suficiente");
    }
}

function abra(){
    console.log(sessionStorage.getItem("amigos"));
}