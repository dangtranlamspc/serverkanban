import { Router } from "express";
import { addNew, getPromotion, remove, update } from "../controllers/promotion";

const router = Router();

router.get('/', getPromotion)
router.post('/add-new', addNew);
router.put('/update', update);
router.delete('/remove', remove)


export default router