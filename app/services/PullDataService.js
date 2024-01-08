import axios from 'axios';
import Pokemon from '../models/Pokemon.js'
import PokemonDetails from '../models/PokemonDetails.js'

const tag = "PullDataService"

class PullDataService {
  async PullProcessData() {
    try {
      console.log(`${tag} :: PullProcessData`)
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

      for (const {name, url} of data.results) {
        const [pokemon, created] = await Pokemon.findOrCreate({
          where: { name, url },
          defaults: { name, url }
        })
        await this.GetCardDetails({url, pokemon_id: pokemon.id})
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