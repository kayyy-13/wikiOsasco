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
export default router