import { supplierForm } from "../forms/supplier";
import SupplierModel from "../models/SupplierModel";

const getSuppliers = async (req: any, res: any) => {
    const {pageSize, page} = req.query;
	try {
        const skip = (page - 1) * pageSize;
		const items = await SupplierModel.find({isDeleted : false})
            .skip(skip)
            .limit(pageSize)
        const total = await SupplierModel.countDocuments();
		res.status(200).json({
			message: 'Products',
			data: {
                total,
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

const updateSupplier = async (req : any, res :any) => {
    const body = req.body
    const {id} = req.query
    try {
        
        await SupplierModel.findByIdAndUpdate(id, body);
        res.status(200).json({
            message : 'Update Supplier successfully',
            data : []
        })
    } catch (error : any) {
        res.status(404).json({
            message : error.message,
        })        
    }
}
const removeSupplier = async (req : any, res :any) => {
    const {id} = req.query
    try {
        
        await SupplierModel.findByIdAndDelete(id);
        res.status(200).json({
            message : 'Remove Supplier successfully',
            data : []
        })
    } catch (error : any) {
        res.status(404).json({
            message : error.message,
        })        
    }
}

const getForms = async (req: any, res: any) => {
	try {
		const form = {
			title: 'Supplier',
			layout: 'horizontal',
			labelCol: 6,
			wrapperCol: 18,
			formItems: supplierForm,
		};

		res.status(200).json({
			message: '',
			data: form,
		});
	} catch (error: any) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export {getSuppliers, addNew , updateSupplier,removeSupplier, getForms};