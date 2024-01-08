

import PullDataService from '../services/PullDataService.js';

const tag ='PullDataController'

class PullDataController {
  async GetCards(req, res) {
    try {
      console.log(`${tag}:: GetCards`)
      await PullDataService.PullProcessData()
      res.send("Finished pulling cards data") 
    } catch (error) {
      throw error;
    }
  }


}

export default new PullDataController()