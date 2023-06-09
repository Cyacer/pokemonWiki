document.addEventListener('keypress',(e) => {
  if(e.key === 'Enter'){
    const btn = document.querySelector('#search');
    btn.click();
  }
})
function pokemonGet(e){
let endpoints = document.querySelector('#pokemonName').value.toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${endpoints}`;
fetch(url)
.then((res) => res.json())
.then((data) => {
  let nome = data.name;
  let peso = data.weight / 10;
  let altura = data.height / 10;
  document.querySelector('.pokebox').innerHTML = `
    <div class='border'>
      <div class='pokebox-container'>
        <p>#${data.id}</p>
        <img class='pokebox-img' src="${data.sprites.other["official-artwork"].front_default}" alt="imagem do ${endpoints}" />
      </div>
      <div class='pokebox-espec'>
        <p>Nome: ${nome.charAt(0).toUpperCase() + nome.slice(1)}</p>
        <p>Altura: ${altura.toLocaleString('pt-BR')} m</p>
        <p>Peso: ${peso.toLocaleString('pt-BR')} kg</p>
      </div>
    </div>
  `
  e.preventDefault();
}) .catch((error) => console.log(error))
}
pokemonGet()