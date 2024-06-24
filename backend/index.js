import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import songRouter from './routes/songRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;
const MongoDBURL = process.env.CONNECTION_URL;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());

app.get('/', (req, res) => {
  res.json('welcome');
});

app.use('/songs', songRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log('MongoDB database is connected successfully!');
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error.message);
  });
