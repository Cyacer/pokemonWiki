document.querySelector('#search').addEventListener('click',pokemonGet)

function pokemonGet(e){
let endpoints = document.querySelector('#pokemonName').value;
const url = `https://pokeapi.co/api/v2/pokemon/wartortle`;
fetch(url)
.then((res) => res.json())
.then((data) => {
  let nome = data.name;
  let peso = data.weight / 10;
  let altura = data.height / 10;
  document.querySelector('.pokebox').innerHTML = `
      <div class='pokebox-container'>
        <p>#${data.id}</p>
        <img class='pokebox-img' src="${data.sprites.other["official-artwork"].front_default}" alt="imagem do ${endpoints}" />
      </div>
      <div>
        <p>Nome:${nome.charAt(0).toUpperCase() + nome.slice(1)}</p>
        <p>Altura: ${altura.toLocaleString('pt-BR')} m</p>
        <p>Peso: ${peso.toLocaleString('pt-BR')} kg</p>
      </div>
  `
}) .catch((error) => console.log(error))

e.preventDefault();
}
pokemonGet()