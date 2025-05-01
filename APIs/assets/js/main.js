// const offset = 0
// const limit = 10
//Mudou para pokeApi.js => Manipulação da API
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map(typeSlot => `<li class="type grass">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon grass">
          <span class="number">#${pokemon.order}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              ${convertPokemonTypesToLi(pokemon.types).join("")}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
          </div>
        </li>
    `
}

// console.log(document.getElementsByClassName("pokemons"))
// console.log(document.getElementById("pokemonList"))

const pokemonList = document.getElementById("pokemonList")
// pokemonList.innerHTML += `<li>teste</li>`

//reduzindo a verbosidade
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")
})

//sexto teste
//Convertendo a lista de pokemons usando Map()
// pokeApi.getPokemons().then((pokemons = []) => {
//     const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
//     console.log(newList)
//     const newHtml = newList.join("")
//     pokemonList.innerHTML += newHtml
// })

//como seria com uma função normal
// pokeApi.getPokemons().then(
//   function(pokemons = []) {
//       const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
//       console.log(newList)
//       const newHtml = newList.join("")
//       pokemonList.innerHTML += newHtml
//   })


//Quinto teste
//Convertendo a lista de pokemons em uma lista HTML antes de renderizar na tela
// pokeApi.getPokemons().then(pokemons => {
//     const listItems = []
//         for (let i = 0; i < pokemons.length; i++) {
//             const pokemon = pokemons[i];
//             listItems.push(convertPokemonToLi(pokemon))            
//         }

//         console.log(listItems)
//         pokemonList.innerHTML += listItems.join("")
//     })

//Quarto Teste
// pokeApi.getPokemons().then(pokemons => {
//             for (let i = 0; i < pokemons.length; i++) {
//                 const pokemon = pokemons[i];
//                 pokemonList.innerHTML += convertPokemonToLi(pokemon)
                
//             }
//         })

//terceiro teste - Movido para pokeApi.js
// fetch(url)
//     .then(res => res.json()) //recebe o body e converte para um json
//     .then(jsonBody => jsonBody.results)
//     .then(pokemons => {
//         for (let i = 0; i < pokemons.length; i++) {
//             const pokemon = pokemons[i];
//             pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
//         }
//     })
//     .catch(err => console.log(err)) //executa em caso de erro


//Segundo teste
// fetch(url)
//     .then(res => res.json()) //recebe o body e converte para um json
//     .then(jsonBody => jsonBody.results)
//     .then(pokemonList => {
//         for (let i = 0; i < pokemonList.length; i++) {
//             const pokemon = pokemonList[i];
//             console.log(convertPokemonToLi(pokemon));

//             document.getElementById("pokemonList").innerHTML = convertPokemonToLi()
            
//         }
//     })
//     .catch(err => console.log(err)) //executa em caso de erro


//primeiro teste
// fetch(url)
//     .then(res => res.json()) //recebe o body e converte para um json
//     .then(jsonBody => jsonBody.results)
//     .then(pokemonList => {
//         debugger
//         console.log(pokemonList)
//     }) //recebe o retorno da função acima
//     .catch(err => console.log(err)) //executa em caso de erro
//     .finally(() => console.log("Requisição Concluída")) //executa no final

