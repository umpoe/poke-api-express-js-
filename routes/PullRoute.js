
// 3rd Party Modules 
import  Router  from 'express' 

// Local Modules 
import PullDataController from '../app/controllers/PullDataController.js'; 


// Initialization 
const router = Router(); 

// Requests 
router.get('/cards', PullDataController.GetCards); 

export default router;
