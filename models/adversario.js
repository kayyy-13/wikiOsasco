import conexao from "../config/conexao.js";

const Adversario = conexao.Schema({
  nome: { type: String, required: true },
  ginasio: { type: String, required: true },
});

export default conexao.model("Adversario", Adversario);
