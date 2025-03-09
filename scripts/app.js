//MAX 10 jogadores
//Adicionar isso na tela de algum jeito
//
//
//
//

let informações = [[]]
let nomesSorteados = [];
let nomesSorteadosM = [];

let usuario, nomeUsuario, nomeUsuarioCopia, dicaUsuario, amigoSecreto, stringParaArray, sorteado;
let inimigo = false;
let dicaPressionada = false;

let input = document.querySelector("input");
let h2 = document.querySelector("h2");

if(document.querySelector("h1").innerHTML == "Inimigo Secreto"){
    inimigo = true;
    atualizarLista()
}

function main(){
    if(dicaPressionada == false){
        subTitulo()
        coletarNomes()
        atualizarLista()
    }else{
        dica()
    }

    adicionarAoBancoDeDados()
    sessionStorage.setItem("amigos" , nomesSorteados);
}

function subTitulo(){
    nomeUsuario = input.value
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
    console.log(nomesSorteados.length);
    
    if(nomes == nomeUsuarioCopia){
        nomesSorteados.pop(nomes)
        nomesSorteadosM.pop(nomes)
    }
}

function atualizarLista(){
    if(input.value == "" && nomesSorteados.length < 1 && usuario != true && inimigo != true){
        alert(`${nomeUsuarioCopia} por favor, insira um nome.`);
    }else if(nomeUsuario == nomeUsuarioCopia){

    }else{
        let lista = document.getElementById("listaAmigos");
        let listaHtml = document.createElement("li");

        input.value = ""
        listaHtml.textContent = nomesSorteadosM
        lista.appendChild(listaHtml);
        nomesSorteadosM.pop();
    }

    if(inimigo == true){
        stringParaArray = sessionStorage.getItem("amigos");
        amiguinhosParaArray = stringParaArray.split(",");

        for(i = 0; i != amiguinhosParaArray.length; i++){
            let lista = document.getElementById("listaAmigos");
            let listaHtml = document.createElement("li");
            listaHtml.textContent = amiguinhosParaArray[i]
            lista.appendChild(listaHtml);
        }
    }
}

//Adicionar função para qual se o usuario optar por sortear novamente, a pegunta sera feita no texto do input
function sortear(){
    let numeroAleatorio;

    if(nomesSorteados.length > 1 || inimigo == true){
        let storageAmigos = sessionStorage.getItem("amigos");
        let amigos = storageAmigos.split(",");

        numeroAleatorio = Math.floor(Math.random() * nomesSorteados.length) || Math.floor(Math.random() * amigos.length);
        amigoSecreto = nomesSorteados[numeroAleatorio] || amigos[numeroAleatorio];
        let resultadoDoJogo = document.querySelector("h2");
        if(inimigo == true){
            resultadoDoJogo.innerHTML = `O seu Inimigo secreto -> ${amigoSecreto}`;
        }else{
            resultadoDoJogo.innerHTML = `O seu amigo secreto -> ${amigoSecreto}`;
        }
    }else{
        alert("Você não tem amigos o suficiente");
    }
}

function adicionarAoBancoDeDados(){
    if(nomeUsuarioCopia != undefined && dicaUsuario != undefined && amigoSecreto != undefined){
        informações.push([nomeUsuarioCopia, dicaUsuario, amigoSecreto]);
        sessionStorage.setItem("informacoes-usuario" , informações);
    }
    /*
    if(reiniciar == true){

    }
    */
}

function dica(){
    dicaPressionada = true;
    h2.innerHTML = "Digite uma dica do seu presente"

    dicaUsuario = input.value;
    input.value = "";
}

function presente(){
    let amigoDica = [];
    let presentes = ["Tênis,Aquilo que te protege da sugeira do chão", "Caixa de chocolate,O protetor dos chocolates enquanto você esta fora", "Notebook,Computador muito versatil", "Livro,Aquilo que guarda o conhecimento de decadas", "Celular,Facilitador de vida do seculo 21", "Cama,Sem você acorda sem coluna", "Chaveiro,Acessorio que atrapalha pessoas com bolso pequeno", "Banquete,Os reis amavam fazelos e devoralos"];
    numeroAleatorio = Math.floor(Math.random() * presentes.length);

    let escolha = presentes[numeroAleatorio];
    stringParaArray = escolha.split(","); 
    amigoDica = [amigoSecreto, stringParaArray[1]];
    h2.innerHTML = "Dica: " + amigoDica[1];
}

function deducao(){
    console.log(stringParaArray[0]);
    if(input.value == stringParaArray[0]){
        h2.innerHTML = "Parabens voce conseguiu acertar o presente do seu inimigo";
    }else if(input.value = ""){
        h2.innerHTML = "Errou";
    }
}