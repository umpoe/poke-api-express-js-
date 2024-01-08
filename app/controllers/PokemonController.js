

import PokemonService from '../services/PokemonService.js';

const tag ='PokemonController'

class PokemonController {
  async GetCards(req, res) {
    try {
      console.log(`${tag}:: GetCards`)
      const page = parseInt(req.query.page, 10) || 1; // Default to 1 if not provided
      const limit = parseInt(req.query.limit, 10) || 10; // Default to 10 if not provided
      const offset = (page - 1) * limit;
      let data = await PokemonService.GetCards({page, limit, offset})
      res.json(data)
      // res.send("Finished pulling cards data") 
    } catch (error) {
      throw error;
    }
  }


}

export default new PokemonController()