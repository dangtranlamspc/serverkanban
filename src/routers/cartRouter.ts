import { Router } from "express";
import { addProduct, clearCardByUser, getCartItems, removeCartItem, updateProductInCart } from "../controllers/cartController";

const router = Router();

router.post('/add-new', addProduct);
router.put('/update', updateProductInCart);
router.get('/', getCartItems)
router.delete('/remove', removeCartItem);
router.get('/clear-carts', clearCardByUser);

export default router;