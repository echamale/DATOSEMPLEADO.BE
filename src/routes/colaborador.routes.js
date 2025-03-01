import express from 'express';
import { createColaborador,
        getColaboradores,
        getColaborador,
        updateColaborador,
        deleteColaborador,
        nivelRiesgoColaborador
} from '../controllers/colaboradorController.js';
import { validarCampos } from '../middlewares/validarCampos.js';

const router = express.Router();

router.post('/colaborador', validarCampos, createColaborador);
router.get('/colaborador', getColaboradores);
router.get('/colaborador/:id', getColaborador)
router.put('/colaborador/:id', validarCampos, updateColaborador);
router.delete('/colaborador/:id', deleteColaborador);
router.get('/colaborador/nivel-riesgo/:id', nivelRiesgoColaborador);

export default router;