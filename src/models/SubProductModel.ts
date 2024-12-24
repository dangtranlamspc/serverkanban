import mongoose, { Schema } from 'mongoose';

const scheme = new Schema(
	{
		size: String,
		color: String,
		price: {
			type: Number,
			required: true,
		},
		qty: {
			type: Number,
			default: 0,
			required: true,
		},
		discount: {
			type: Number,
		},
		productId: {
			type: String,
			required: true,
		},
		images: [String],
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const buildProduct = new Schema(
	{
		size: String,
		color: String,
		price: {
			type: Number,
			required: true,
		},
		qty: {
			type: Number,
			default: 0,
			required: true,
		},
		billId: {
			type: String,
			required: true,
		},
		discount: {
			type: Number,
		},
		productId: {
			type: String,
			required: true,
		},
		images: [String],
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const SubProductModel = mongoose.model('subproducts', scheme);

const BuildProductModel = mongoose.model('buildProducts', buildProduct);

export {BuildProductModel};

export default SubProductModel;