var nomesSorteados = [];

function coletarNomes(){
    var nomes = document.querySelector("input").value;
    if(nomes == ""){
        alert("Por favor, insira um nome.");
    }else{  
        console.log(nomes);
        nomesSorteados.push(nomes);
        document.querySelector("input").value = "";
    }
    console.log(nomesSorteados.length);
}
