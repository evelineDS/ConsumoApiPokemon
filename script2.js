var retorno='';
let urls=[];
let ret = [];
var url="https://pokeapi.co/api/v2/pokemon/"

function pegavetor() {
    for(var i=1; i< maxValor; i++){
        urln = url+ i;

        fetch(urln)
            .then((response) => {
                 return response.json();
             })
            .then((data) => {
            //o que fazer com os dados
                retorno = data;
                ret.push(retorno);
        });;
    }
    console.log(ret);
    
    ret.forEach(inserirNaPagina);
}


conteudo = document.getElementById("conteudo");

function inserirNaPagina(item){
    var rets = item;
    var template = document.querySelector("#template1");

    nomePokemon = template.content.querySelector("h2");
    nomePokemon.textContent = rets.name;

    numPokemon = template.content.querySelector("h3");
    numPokemon.textContent = rets.id;

    var imgs = rets['sprites']['front_default'];
    imagPoke = template.content.getElementById("fig").setAttribute("src", imgs);
    
    var nova_div = document.importNode(template.content, true);
    conteudo.appendChild(nova_div);

}


var maxValor;  
var slider = document.getElementById("rangeVal");
slider.oninput = function(){
    maxValor = this.value;
    document.getElementById("rangeValLabel").textContent = (this.value - 1);
    console.log(maxValor);
}


document.getElementById('btn1').onclick = pegavetor; 
document.getElementById("btn2").onclick = pegavetor1; 
 
function pegavetor1(){
    botao = document.getElementById("btn2");
    botao.style.backgroundColor = "lightgreen";
    pegavetor();
}
