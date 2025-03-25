import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    publisher: {
      type: String,
    },
    pages: {
      type: Number,
    },
    releaseDate: {
      type: String,
    },
    ISBN: {
      type: String,
    },
  }
);

const Book = mongoose.model("books", bookSchema);
export default Book;
