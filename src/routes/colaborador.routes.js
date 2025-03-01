import express from 'express';
import { createColaborador,
        getColaboradores,
        updateColaborador
} from '../controllers/colaboradorController.js';

const router = express.Router();

router.post('/colaborador', createColaborador);
router.get('/colaborador', getColaboradores)
router.put('/colaborador/:id', updateColaborador)

export default router;