import SupplierModel from "../models/SupplierModel";

const getSuppliers = async (_req: any, res: any) => {
	try {
		const items = await SupplierModel.find({})
		res.status(200).json({
			message: 'Products',
			data: {
				items,	
			},
		});
	} catch (error: any) {
		res.status(404).json({
			message: error.message,
		});
	}
};

const addNew = async (req : any, res :any) => {
    const body = req.body

    try {
        const newSupplier = new SupplierModel(body)
        newSupplier.save()

        res.status(200).json({
            message : 'Add New Supplier successfully',
            data : newSupplier
        })
    } catch (error : any) {
        res.status(404).json({
            message : error.message,
        })        
    }
}

export {getSuppliers, addNew };