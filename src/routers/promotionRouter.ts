import { Router } from "express";
import { addNew, getPromotion, remove, update } from "../controllers/promotion";
import { verifyToken } from "../middlewares/verifyToken";

const router = Router();

router.get('/', getPromotion);
router.use(verifyToken);
router.post('/add-new', addNew);
router.put('/update', update);
router.delete('/remove', remove)


export default router