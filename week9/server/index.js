// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import Book from "./models/books.js";
import book_Router from "./routers/book_router.js";
import user_Router from "./routers/user_router.js";


// variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json()); // JSON
app.use(express.urlencoded({ extended: true }));  // HTML Form

//routes
app.get("/", (req, res) => {
  Book.find().then((results) => {
    res.json(results);
  });
});

// start up
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database is connected");
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

app.use('/books', book_Router);   
app.use('/users', user_Router);