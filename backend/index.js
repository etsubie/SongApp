import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import songRouter from "./routes/songRoute.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 4001;
const MongoDBURL = process.env.CONNECTION_URL;

//middleware
app.use(express.json({ limit: '10mb' })); 
app.use(cors({
  origin: '*'
}));


app.get('/', (req, res) =>{
  console.log(req)
 res.json('welcome')
})

app.use('/songs',songRouter)

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("mongoDB database is connected successfuly!");
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log({message: error.message});
  });
