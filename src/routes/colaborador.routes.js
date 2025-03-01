import express from 'express';
import { createColaborador } from '../controllers/colaboradorController.js';

const router = express.Router();

router.post('/colaborador', createColaborador);

export default router;