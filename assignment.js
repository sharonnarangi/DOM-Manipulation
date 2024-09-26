fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    // We'll use the data to create the Pokémon div and image tag
    const pokemonData = data;
    // ...
  })
  .catch(error => console.error('Error:', error));
  //then is used to handle the response
  //catch is used to handle any errors that may occur.
  //fetch method here is used to retriecve data from PokeAPI