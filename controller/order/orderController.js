import Order from "../../models/Order/Order.js";

//all Order
export const allOder = async(req, res)=>{
  const orderAll = await Order.find().populate('user',['username']);
  try {
    if(orderAll.length === 0){
      return res.status(200).json({message:'Lista de ventas vacia'})
    }else{
      return res.status(200).json(orderAll)
    }
  } catch (err) {
    return res.status(500).json({message: 'No se econtraron ventas'})
  }
};

//by Id order
export const byIDOrder = async(req, res)=>{
  const {id}  = req.params;
  const orderByID = await Order.findById(id).populate('user',['username']);
  try {
    return res.status(200).json(orderByID);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo encontrar la venta'})
  }
};

//create Order
export const createOrder = async(req, res)=>{
  const orderCreate = await Order.create(req.body);
  try {
    return res.status(200).json(orderCreate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo crear la venta'})
  }
};

//update Order
export const updateOrder = async(req, res)=>{
  const {id} = req.params;
  const orderUpdate = await Order.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(200).json(orderUpdate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo actualizar la venta'});
  }
};

//delete Order
export const deleteOrder = async(req, res)=>{
  const {id} = req.params;
  const orderDelete = await Order.findByIdAndDelete(id);
  try {
    return res.status(200).json({message: 'Venta eliminada correcatemente'});
  } catch (err) {
    return res.status(500).json({message: 'No se puedo eliminar la venta'});
  }
};

//order by codigo
export const getOrderByCodigo = async(req, res) => {
  const codigo = req.params.codigo;
  const nam = await Order.findOne({codigo})
  try {
    return res.status(200).json(nam)
  } catch (err) {
    return res.status(500).json({message:'no se puedo encontrar'})
  }
}