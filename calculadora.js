///---------Funcoes relacionadas ao botao de adicionar nota ----------
function AdicionaElemento (elemento) {
    let caixa = document.querySelector (".caixa");
    let texto = document.createElement ("p");

    let quantidade = document.querySelectorAll(".notas").length;

    texto.innerText = `A nota ${quantidade+1} foi: `;

    let nota = document.createElement ("span");
    nota.classList.add("notas");
    nota.innerText = elemento;

    texto.append(nota);

    caixa.append(texto);
}

// funcao para checar se o numero é valido:
function ChecarElemento (elemento) {

    // vendo se clicou com espaco vazio:
    if (elemento == "")
        alert (`Por favor, insira uma nota`);

    // vendo se o usuario digitou um numero:
    else if (isNaN(elemento))
        alert (`A nota digitada é invalida, por favor, insira uma nota valida`);

    // vendo se o usuario digitou uma nota valida:
    else if ((elemento < 0) || (elemento > 10))
        alert (`A nota digitada é inválida, por favor, insira uma nota válida`);

    // caso o elemento seja valido 
    else 
        AdicionaElemento (elemento);
}

function ColetaElemento (){
    // adicionando elemento de escrita:
    let painel = document.querySelector ("#input");

    let number = painel.value;

    nota = ChecarElemento(number);

    painel.value = "";
}

//------------- Funcoes relacionadas ao botao de calcular media ---------------

function CalcularMedia (){

    let notas = document.querySelectorAll(".notas");
    let tamanho = notas.length;
    let media = 0;

    for (let i = 0; i < tamanho; i++){
        media += Number(notas[i].innerText);
    }

    media = media/tamanho;

    ColocarMedia(media.toFixed(2));
}

function ColocarMedia (media){
    let local = document.getElementById ("media");

    local.innerText = "A média é: " + media;
}

//------------ Coisas mais generalistas --------------

// adicionando variaveis:
const botaoAdicionar = document.getElementById("bot_clicar");
const botaoCalcular = document.getElementById("bot_calcular");

// adicionando acao para os botoes:
botaoAdicionar.addEventListener ("click", ColetaElemento);

botaoCalcular.addEventListener ("click", CalcularMedia)