import Products_Log from "../../models/Product/Products_Log.js";

//all log products
export const allLog = async (req, res)=>{
  const logAll = await Products_Log.find().populate('user',['username']).populate('supplier',['name']).populate('product',['name']);
  try {
    if(logAll.length === 0){
      return res.status(200).json({message: "Lista vacia"});
    }else{
      return res.status(200).json(logAll);
    }
  } catch (err) {
    return res.status(500).json({message: 'No se econtraron datos'});
  }
};

//by id log products
export const byIDLog = async (req, res)=>{
  const { id } = req.params;
  const logByID = await Products_Log.findById(id).populate('user',['username']).populate('supplier',['name']).populate('product',['name']);
  try {
    return res.status(200).json(logByID);
  } catch (err) {
    return res.status(500).json({message: 'No se encontro el log del producto'});
  }
};

//create log products
export const createLog = async (req, res)=>{
  const logCreate = await Products_Log.create(req.body);
  try {
    return res.status(200).json(logCreate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo crear el producto log'});
  }
};

//update log products
export const updateLog = async (req, res)=>{
  const { id } = req.params;
  const logUpdate = await Products_Log.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(200).json(logUpdate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo actualizar el productlog'})
  }
};

//delete log products
export const deleteLog = async (req, res)=>{
  const { id } = req.params;
  const logDelete = await Products_Log.findByIdAndDelete(id)
  try {
    return res.status(200).json({message: 'productlog eliminado correctamente'})
  } catch (err) {
    return res.status(500).json({message: 'No se puedo eliminar'});
  }
};