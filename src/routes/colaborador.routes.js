import express from 'express';
import { createColaborador,
        getColaboradores,
        updateColaborador,
        deleteColaborador
} from '../controllers/colaboradorController.js';
import { validarCampos } from '../middlewares/validarCampos.js';

const router = express.Router();

router.post('/colaborador', validarCampos, createColaborador);

router.get('/colaborador', getColaboradores);
router.put('/colaborador/:id', updateColaborador);
router.delete('/colaborador/:id', deleteColaborador);

export default router;