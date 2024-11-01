import CustomerModel from "../models/CustomersModel";
import bcrypt from 'bcrypt'
import { getAccesstoken } from "../utils/getAccesstoken";

const create = async (req: any, res: any) => {
	const body = req.body;

	try {

		const customer = await CustomerModel.findOne({email : body.email})
		if (customer) {
			throw new Error('Email đã tồn tại')
		}

		const salt = await bcrypt.genSalt(10)

        const haspassword = await bcrypt.hash(body.password, salt)

        body.password = haspassword

		const newCustomer : any = new CustomerModel(body)

		await newCustomer.save()
		delete newCustomer._doc.password;

		const accesstoken = await getAccesstoken({_id: newCustomer._id, email : body.email, rule : 1})
		
		res.status(200).json({
			message: 'Register successfully!!!',
			data: {
				...newCustomer._doc,
				accesstoken
			},
		});
	} catch (error: any) {
		// console.log(error);
		res.status(404).json({
			message: error.message,
		});
	}
};

export { create };