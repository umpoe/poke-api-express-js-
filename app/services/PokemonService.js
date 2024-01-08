import axios from 'axios';
import Pokemon from '../models/Pokemon.js'
import PokemonDetails from '../models/PokemonDetails.js'

const tag = "PullDataService"

class PullDataService {
  async GetCards({page, limit, offset}) {
    try {
      console.log(`${tag} :: GetCards`)
      
      const pokemons = await Pokemon.findAndCountAll({
        include: [{
            model: PokemonDetails,
            as: 'pokemon_detail' // Optional: define an alias
        }],
        limit: limit,
        offset: offset
    });

    // Calculating the total number of pages
    const totalPages = Math.ceil(pokemons.count / limit);

    return {
      data: pokemons.rows,
      totalItems: pokemons.count,
      totalPages: totalPages,
      currentPage: page,
      limit
    }

    } catch (error) {
      throw error;
    }
  }
  async GetCardDetails({url, pokemon_id}) {
    try {
      console.log(`${tag} :: GetCardDetails`, {url, pokemon_id})
      const { data } = await axios.get(`${url}`)
      const { sprites, weight, height, species } = data
      const {back_default, front_default, back_shiny, front_shiny} = sprites
      const species_name = species.name

      const [pokemonDetails, created] = await PokemonDetails.findOrCreate({
        where: { pokemon_id, species_name, front_shiny, back_shiny, front_default, back_default, weight, height },
        defaults: { pokemon_id, species_name, front_shiny, back_shiny, front_default, back_default, weight, height }
      })

    } catch (error) {
      throw error;
    }
  }
} 

export default new PullDataService()