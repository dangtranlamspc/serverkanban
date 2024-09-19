import {Router} from 'express'
import { addNew, getSuppliers, updateSupplier } from '../controllers/supplier';

const router = Router();

router.get('/', getSuppliers);
router.post('/add-new', addNew)
router.put('/update', updateSupplier)

export default router;