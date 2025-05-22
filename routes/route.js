import express from "express";
const router = express.Router();

import multer from "multer";
var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    let nome = Date.now() + "-" + file.originalname;
    cb(null, nome);
  },
  destination: function (req, file, cb) {
    let path = "./public/fotos";
    cb(null, path);
  },
});
var upload = multer({ storage });

import {
  home,
  abreedtescala,
  edtescala,
  abreaddescala,
  deletaescala,
  addescala,
  listarescala,
  filtrarescala,
  abreedtsocio,
  edtsocio,
  abreaddsocio,
  deletasocio,
  addsocio,
  listarsocio,
  filtrarsocio,
  abreedtjogo,
  edtjogo,
  abreaddjogo,
  deletajogo,
  addjogo,
  listarjogo,
  filtrarjogo,
  abreedtadversario,
  edtadversario,
  abreaddadversario,
  deletadversario,
  addadversario,
  listaradversario,
  filtraradversario,
} from "../controllers/controller.js";

// HOME
router.get("/", home);

// ESCALAÇÃO
router.get("/admin/escalacao/add", abreaddescala);
router.post("/admin/escalacao/add", upload.single("foto"), addescala);
router.get("/admin/escalacao/lst", listarescala);
router.post("/admin/escalacao/lst", filtrarescala);
router.get("/admin/escalacao/del/:id", deletaescala);
router.get("/admin/escalacao/edt/:id", abreedtescala);
router.post("/admin/escalacao/edt/:id", upload.single("foto"), edtescala);

// SÓCIO
router.get("/admin/socio/add", abreaddsocio);
router.post("/admin/socio/add", addsocio);
router.get("/admin/socio/lst", listarsocio);
router.post("/admin/socio/lst", filtrarsocio);
router.get("/admin/socio/del/:id", deletasocio);
router.get("/admin/socio/edt/:id", abreedtsocio);
router.post("/admin/socio/edt/:id", edtsocio);

// JOGO
router.get("/admin/Jogo/add", abreaddjogo);
router.post("/admin/Jogo/add", addjogo);
router.get("/admin/Jogo/lst", listarjogo);
router.post("/admin/Jogo/lst", filtrarjogo);
router.get("/admin/Jogo/del/:id", deletajogo);
router.get("/admin/Jogo/edt/:id", abreedtjogo);
router.post("/admin/Jogo/edt/:id", edtjogo);

// ADVERSARIO
router.get("/admin/adversario/add", abreaddadversario);
router.post("/admin/adversario/add", addadversario);
router.get("/admin/adversario/lst", listaradversario);
router.post("/admin/adversario/lst", filtraradversario);
router.get("/admin/adversario/del/:id", deletadversario);
router.get("/admin/adversario/edt/:id", abreedtadversario);
router.post("/admin/adversario/edt/:id", edtadversario);

export default router;
