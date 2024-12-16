import express from 'express';
import { generaterecom } from '../controllers/clgrecomController.js';
import { auth_middleware } from '../middlewares/auth.js';
const recomRouter = express.Router(); 

recomRouter.post('/recom' , generaterecom , auth_middleware)  ; 

export default recomRouter ;
