import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import { addNew, getPromotions } from '../controllers/promotions';

const router = Router();

router.get('/', getPromotions);

router.use(verifyToken);

// router.get('/check', checkDisCountCode);
router.post('/add-new', addNew);
// router.put('/update', update);
// router.delete('/remove', remove);

export default router;