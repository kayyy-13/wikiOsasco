import mongoose from "mongoose";
const url =
  "mongodb+srv://aluno:aluno@ifsul.bs0u4so.mongodb.net/?retryWrites=true&w=majority&appName=IFsul";

const conexao = await mongoose.connect(url);

export default conexao;
