import express from 'express';
import { createColaborador,
        getColaboradores
} from '../controllers/colaboradorController.js';

const router = express.Router();

router.post('/colaborador', createColaborador);
router.get('/colaborador', getColaboradores)

export default router;