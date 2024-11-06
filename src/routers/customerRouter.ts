import { Router } from 'express';
import { create, getVerifiCode } from '../controllers/customers';

const router = Router();

router.post('/add-new', create);
router.post('/verify',getVerifiCode)

export default router;