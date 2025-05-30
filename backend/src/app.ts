import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',   // or '*' to allow all
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));


app.use(express.json()); 

app.get('/api', (req, res) => {
  res.send('1234567')
})


app.use(errorHandler);

export default app;