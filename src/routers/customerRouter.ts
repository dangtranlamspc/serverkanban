import { Router } from 'express';
import { create, getVerifiCode, login, resendCode } from '../controllers/customers';

const router = Router();

router.post('/add-new', create);
router.put('/verify',getVerifiCode);
router.get('resend', resendCode)
router.post('/login', login);


export default router;