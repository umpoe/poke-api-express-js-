This is a simple api that fetches data from [pokeapi](https://pokeapi.co/ "https://pokeapi.co/") then stores the data in the DB. the fetching is in 2 stages: 

1. [List of pokemons](https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 "https://pokeapi.co/api/v2/pokemon?limit=100000&amp;offset=0") (with pokemon items each having name and url): then stored to pokemons table using the pokemon model
2. pokemon details which are found by fetching the ulrs of the above pokemon items: then stored to pokemon_details table using the PokemonDetails model

Once the 2 tables are populated (pokemons and pokemon_details) by calling the [pull-endpoint](localhost:3000/pull/cards "localhost:3000/pull/cards") then the endpoint for getting cards can be called: [get cards](localhost:3000/pokemon/cards?page=1&limit=20 "localhost:3000/pokemon/cards?page=1&amp;limit=20")

main elements of this api:

1. Model setup
2. External api call
3. Joining model data when getting the infor from internal DBs
4. Basic express-js structure
5. Doccumentation folder that gives sample external responses incase one needs to bypass the external calls
