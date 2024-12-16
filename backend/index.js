import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import recomRouter from './routes/recomRouter.js';

// init server
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())  ; 

// connect to mongodb
mongoose.connect(process.env.MONGODB_URL, {
}
).then(() => {       
    console.log('Connected to MongoDB');
}
).catch((error) => {
    console.log(error.reason);
}
);

// routes
app.use('/api/user' , userRouter)  ; 
app.use('/api/recom' , recomRouter)  ;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {    
    console.log(`Server is running on port ${process.env.PORT}`);
}   );  