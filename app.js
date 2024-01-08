// 3rd Party Modules 
import 'dotenv/config';
import express from 'express'; 
import session from 'express-session'
import responseTime from 'response-time'
import './app/models/Relationships.js';

// Local Modules
import PullRoute from './routes/PullRoute.js';
import PokemonRoute from './routes/PokemonRoute.js';


// Server Initialization 
const app = express(); 
const PORT = process.env.PORT; 
const ENV = process.env.ENV; 
const SESSION_KEY = process.env.SESSION_KEY; 

// Middlewares 
app.use(express.json()); 
app.use(reqTimerMiddleware); 

function reqTimerMiddleware(req, res, next){
	req.start_time=new Date()
	next()
}
app.use(responseTime())

// Routes will be written here  
app.use('/pull', PullRoute); 
app.use('/pokemon', PokemonRoute); 

var sess = { secret: SESSION_KEY, cookie: {} }
if (ENV === 'production') {
	app.set('trust proxy', 1) // trust first proxy
	sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
);
