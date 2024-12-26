import CartModel from "../models/CartModel";

const addProduct = async (req: any, res: any) => {
    const {id} = req.query;
    const body = req.body;

    try {
        if (id) {
            await CartModel.findByIdAndUpdate(id, body);
            res.status(200).json({
                data : [],
                message: 'Product added to cart'
            });
        }else{
            const item = new CartModel(body);
            await item.save();
            res.status(200).json({
                data : item,
                message: 'Product added to cart'
            });
        }
    } catch (error : any) {
        res.status(404).json({
            message : error.message
        })
    }

};

const updateProductInCart = async (req: any, res: any) => {
	const { id } = req.query;

	const body = req.body;

	try {
		await CartModel.findByIdAndUpdate(id, body);

		res.status(200).json({ message: 'Done', data: [] });
	} catch (error: any) {
		res.status(404).json({ message: error.message });
	}
};

const getCartItems = async (req: any, res: any) => {
	const uid = req.uid;
	try {
		const items = await CartModel.find({ createdBy: uid });

		res.status(200).json({ data: items });
	} catch (error: any) {
		res.status(404).json({ message: error.message });
	}
};

const removeCartItem = async (req: any, res: any) => {
	const { id } = req.query;
	try {
		await CartModel.findByIdAndDelete(id);

		res.status(200).json({ message: 'fafa', data: [] });
	} catch (error: any) {
		res.status(404).json({ message: error.message });
	}
};

const clearCardByUser = async (req: any, res: any) => {
	const uid = req.uid;

	try {
		const cartItems = await CartModel.find({ createdBy: uid });

		cartItems.forEach(
			async (item) => await CartModel.findByIdAndDelete(item._id)
		);

		res.status(200).json({
			message: 'Đã xóa đơn hàng',
			data: [],
		});
	} catch (error: any) {
		res.status(404).json({
			message: error.message,
		});
	}
};

export {addProduct,updateProductInCart,getCartItems,removeCartItem,clearCardByUser}