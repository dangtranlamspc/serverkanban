import {Router} from 'express'
import { addNew, getSuppliers } from '../controllers/supplier';

const router = Router();

router.get('/', getSuppliers);
router.post('/add-new', addNew)

export default router;