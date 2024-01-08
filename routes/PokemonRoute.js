
// 3rd Party Modules 
import  Router  from 'express' 

// Local Modules 
import PokemonController from '../app/controllers/PokemonController.js'; 


// Initialization 
const router = Router(); 

// Requests 
router.post('/cards', PokemonController.GetCards); 

export default router;
