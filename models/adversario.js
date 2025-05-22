import conexao from "../config/conexao.js";

const Adversario = conexao.Schema({
  time: { type: String, required: true },
  ginasio: { type: String, required: true },
});

export default conexao.model("adversario", Adversario);
