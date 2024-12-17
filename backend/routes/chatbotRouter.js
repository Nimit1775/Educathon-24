import { chatbot } from "../controllers/chatbot.js";
import express from 'express';

const chatRouter = express.Router();  

chatRouter.post('/chat' , chatbot)  ; 

export default chatRouter ; 