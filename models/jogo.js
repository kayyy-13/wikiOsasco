import conexao from "../config/conexao.js";
import adversario from "./adversario.js";

const Jogo = new conexao.Schema({
  adversario: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Adversario",
    required: false,
  },
  data: { type: Date, required: true },
  local: { type: String, required: true },
  resultado: { type: String },
});

export default conexao.model("Jogo", Jogo);
