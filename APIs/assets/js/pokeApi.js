const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
                .then((res) => res.json())    
}


pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then(res => res.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetails))
        .then(detailRequests => Promise.all(detailRequests))
        .then(pokemonDetails => {
            // debugger
            // console.log(pokemonDetails)
            return pokemonDetails
        })
        .catch(err => console.log(err))
}

// Promise.all() recebe um array de promise

// Promise.all([
//     fetch('https://pokeapi.co/api/v2/pokemon/1'),
//     fetch('https://pokeapi.co/api/v2/pokemon/2'),
//     fetch('https://pokeapi.co/api/v2/pokemon/3'),
//     fetch('https://pokeapi.co/api/v2/pokemon/4'),
// ]).then(results => console.log(results))
