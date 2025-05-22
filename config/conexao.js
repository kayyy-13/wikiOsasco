import mongoose from "mongoose";
const url =
  "mongodb+srv://joaberdasilva81:texeiratexeira@cluster0.t5mxwvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const conexao = await mongoose.connect(url);

export default conexao;
