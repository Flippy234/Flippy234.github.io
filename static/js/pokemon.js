
(async () => {
    // generate the random id for the pokemon
    const getRandomPokemon = async () => {

        const pokemonId = Math.floor(Math.random() * 150);
        const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonId;

        const response = await fetch (url)
        const pokemon = await response.json();
        return pokemon;
    }

    async function renderPokemon() {
        try {
            const pokemon = await getRandomPokemon();
            const img = document.createElement('img')
            img.src = pokemon.sprites.front_default
            img.alt = pokemon.name
            const pokemonContainer = document.querySelector('.pokemon')
            pokemonContainer.append(img)
        } catch (error) {
            console.log('Error loading Pokemon image:', error)
        }
    }

    renderPokemon();
})();











