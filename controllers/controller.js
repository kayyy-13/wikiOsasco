import Socio from "../models/socio.js";
import Escalacao from "../models/escalacao.js";
import Jogo from "../models/jogo.js";
import Adversario from "../models/adversario.js";

export async function home(req, res) {
  res.render("admin/index");
}

//-------ESCALAÇÃO----------

export async function abreaddescala(req, res) {
  res.render("admin/escalacao/add"); //render n tem /
}

export async function addescala(req, res) {
  var fotoupload;
  if (req.file != null) {
    fotoupload = req.file.filename; //se tiver foto, pega o nome e add
  } else {
    fotoupload = null; // se não tem, é nulo
  }

  await Escalacao.create({
    foto: fotoupload,
    nome: req.body.nome,
    numero: req.body.numero,
    posicao: req.body.posicao,
  });
  res.redirect("/admin/escalacao/add");
}

export async function listarescala(req, res) {
  const escalacoes = await Escalacao.find().sort({ numero: 1 });
  res.render("admin/escalacao/lst", { escalacoes });
}

export async function filtrarescala(req, res) {
  const escalacoes = await Escalacao.find({
    nome: new RegExp(req.body.pesquisa, "i"),
  });
  res.render("admin/escalacao/lst", { escalacoes });
}

export async function deletaescala(req, res) {
  const id = req.params.id;
  await Escalacao.findByIdAndDelete(id);
  res.redirect("/admin/escalacao/lst");
}

export async function abreedtescala(req, res) {
  const id = req.params.id;
  const escalacao = await Escalacao.findById(id);
  res.render("admin/escalacao/edt", { Escalacao: escalacao });
}

export async function edtescala(req, res) {
  var fotoupload;
  if (req.file != null) {
    fotoupload = req.file.filename; //se tiver foto, pega o nome e add
  } else {
    fotoupload = req.Escalacao.foto; // se não tem, é nulo
  }

  const id = req.params.id;
  await Escalacao.findByIdAndUpdate({
    id,
    nome: req.body.nome,
    numero: req.body.numero,
    posicao: req.body.posicao,
    foto: fotoupload,
  });
  res.redirect("/admin/escalacao/lst");
}

//--------SOCIO--------

export async function abreaddsocio(req, res) {
  res.render("admin/socio/add");
}

export async function addsocio(req, res) {
  await Socio.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
    senha: req.body.senha,
  });
  res.redirect("/admin/socio/add");
}

export async function listarsocio(req, res) {
  const socios = await Socio.find();
  res.render("admin/socio/lst", { socios });
}

export async function filtrarsocio(req, res) {
  const socios = await Socio.find({ nome: new RegExp(req.body.pesquisa, "i") });
  res.render("admin/socio/lst", { socios });
}

export async function deletasocio(req, res) {
  const id = req.params.id;
  await Socio.findByIdAndDelete(id);
  res.redirect("/admin/socio/lst");
}

export async function abreedtsocio(req, res) {
  const id = req.params.id;
  try {
    const socio = await Socio.findById(id);
    if (!socio) {
      return res.status(404).send("Sócio não encontrado");
    }
    res.render("admin/socio/edt", { socio });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar sócio");
  }
}

export async function edtsocio(req, res) {
  const id = req.params.id;
  const updateData = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
  };
  if (req.body.senha) {
    updateData.senha = req.body.senha;
  }
  await Socio.findByIdAndUpdate(id, updateData);
  res.redirect("/admin/socio/lst");
}



//-------JOGOS--------

export async function abreaddjogo(req, res) {
  const adversarios = await Adversario.find({}).catch(function (err) {
    console.log(err);
  });
  res.render("admin/Jogo/add", { adversarios: adversarios });
}

export async function addjogo(req, res) {
  var jadversario = null;
  //se  vier buscar
  if (req.body.adversario != null) {
    jadversario = await Adversario.findById(req.body.adversario);
  }

  await Jogo.create({
    adversario: req.body.adversario,
    data: new Date(req.body.data),
    local: req.body.local,
    resultado: req.body.resultado,
    adversario: jadversario,
  });
  res.redirect("/admin/Jogo/add");
}

export async function listarjogo(req, res) {
  const resultado = await Jogo.find()
    .populate("adversario")
    .catch(function (err) {
      console.log(err);
    });
  res.render("admin/Jogo/lst", { Jogos: resultado });
}

export async function filtrarjogo(req, res) {
  const resposta = await Jogo.find({
    nome: new RegExp(req.body.pesquisa, "i"),
  });
  res.render("admin/Jogo/lst", { Jogo: resposta });
}

export async function deletajogo(req, res) {
  await Jogo.findByIdAndDelete(req.params.id);
  res.redirect("/admin/Jogo/lst");
}

export async function abreedtjogo(req, res) {
  const resultado = await Jogo.findById(req.params.id);
  const adversario = await Adversario.find({}).catch(function (err) {
    console.log(err);
  });
  res.render("admin/Jogo/edt", { Jogo: resultado, adversario: adversario });
}

export async function edtjogo(req, res) {
  await Jogo.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/Jogo/lst");
}

//-------ADVERSARIO--------
export async function abreaddadversario(req, res) {
  res.render("admin/adversario/add"); // ajuste o caminho se necessário
}

export async function addadversario(req, res) {
  try {
    await Adversario.create(req.body);
    res.redirect("/admin/Jogo/add");
  } catch (err) {
    console.log(err);
    res.status(500).send("Erro ao adicionar adversário");
  }
}

export async function listaradversario(req, res) {
  const lista = await Adversario.find();
  res.render("admin/Jogo/lst", { lista });
}

export async function filtraradversario(req, res) {
  const busca = req.body.busca;
  const lista = await Adversario.find({
    time: { $regex: busca, $options: "i" },
  });
  res.render("admin/adversario/lst", { lista });
}

export async function deletadversario(req, res) {
  await Adversario.findByIdAndDelete(req.params.id);
  res.redirect("/admin/adversario/lst");
}

export async function abreedtadversario(req, res) {
  const adversario = await Adversario.findById(req.params.id);
  res.render("adversario/edt", { adversario });
}

export async function edtadversario(req, res) {
  await Adversario.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/adversario/lst");
}
