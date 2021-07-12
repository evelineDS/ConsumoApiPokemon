
var retorno


function loadpk() {

    var url="https://pokeapi.co/api/v2/pokemon/1";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //o que fazer com os dados
            console.log(data);
            document.getElementById('poknome').innerHTML = data['name'];
            let img = data['sprites']['front_default'];
            document.getElementById("fig").setAttribute("src", img); 
            document.getElementById("poknum").innerHTML = data['id'];
        });

}
document.getElementById('btn1').onclick = loadpk;   