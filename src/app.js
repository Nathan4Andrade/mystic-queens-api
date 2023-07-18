import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
