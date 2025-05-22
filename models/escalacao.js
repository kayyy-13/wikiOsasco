import conexao from "../config/conexao.js"

const Escalacao = conexao.Schema(
    {
            foto: {type:String, required: false},
            nome: {type:String, required: true},
            numero: {type:String, required: true},
            posicao: {type:String, required: true}
    })

    export default conexao.model('Escalacao', Escalacao)