import express from 'express';
import { genfinansol } from '../controllers/financalc.js';
const finanRouter = express.Router();  

finanRouter.post('/calc'  , genfinansol) ; 

export default finanRouter ;