import express from 'express';
const router = express.Router();
import {
    home,
    abreedttime,
    edttime,
    abreaddtime,
    deletatime,
    addtime,
    listartime,
    filtrartime,
    addjogador,
    abreaddjogador,
    listarjogador,
    filtrarjogador,
    deletajogador,
    edtjogador
} from '../controllers/controller.js'
router.get('/', home)
//time
//create do modelo time (create)
router.get('/admin/time/add', abreaddtime)
router.post('/admin/time/add', addtime)
//rotas do modelo time (read)
router.get('/admin/time/lst', listartime)
router.post('/admin/time/lst', filtrartime)
//rota do modelo time (delete)
router.get('/admin/time/del/:id', deletatime)
//rota do modelo time (editar)
router.get('/admin/time/edt/:id', abreedttime)
router.post('/admin/time/edt/:id', edttime)

//jogador
//create do modelo jogador (create)
router.get('/admin/jogador/add', abreaddjogador)
router.post('/admin/jogador/add', addjogador)
//rotas do modelo jogador (read)
router.get('/admin/jogador/lst', listarjogador)
router.post('/admin/jogador/lst', filtrarjogador)
//rota do modelo jogador (delete)
router.get('/admin/jogador/del/:id', deletajogador)
//rotas do modelo jogador (read)
router.get('/admin/jogador/edt/:id', abreaddjogador)
router.post('/admin/jogador/edt/:id', edtjogador)


export default router