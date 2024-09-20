import {Router} from 'express'
import { addNew, getForms, getSuppliers, removeSupplier, updateSupplier } from '../controllers/supplier';

const router = Router();

router.get('/', getSuppliers);
router.post('/add-new', addNew)
router.put('/update', updateSupplier)
router.delete('/remove', removeSupplier)
router.get('/get-form-supplier', getForms)

export default router;