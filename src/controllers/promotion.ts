import PromotionModel from "../models/PromotionModel";

const addNew = async (req : any, res : any) => {
    const body = req.body;

    try {
      const item = new PromotionModel(body);

      await item.save()
      res.status(200).json({
        message: 'Promotion',
        data: item,
		  });
    } catch (error : any) {
        res.status(404).json({
			  message: error.message,
		  });
    }
};

const getPromotion = async (req : any, res : any) => {
  const {limit} = req.query;

  try {
    const items = await PromotionModel.find({isDeleted : false}).limit(limit);

    res.status(200).json({
      message : 'added',
      data : items
    })
  } catch (error: any) {
    res.status(404).json({message : error.message})
  }
};

const update = async (req : any, res : any) => {
  const {id} = req.query;
  const body = req.body;

  try {
    await PromotionModel.findByIdAndUpdate(id, body);
    res.status(200).json({
      message : 'Update',
      data: []
    })
  } catch (error : any) {
    res.status(404).json({
      message : error.message
    })
  }
};

const remove = async (req : any, res : any) => {
  const {id} = req.query
  try {
    await PromotionModel.findByIdAndDelete(id);
    res.status(200).json({
      message : 'Delete',
      data: []
    })
  } catch (error : any) {
    res.status(404).json({
      message : error.message
    })
  }
}

export {addNew, getPromotion, update,remove}