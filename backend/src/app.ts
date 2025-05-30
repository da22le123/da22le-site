import express from 'express';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(express.json());

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;