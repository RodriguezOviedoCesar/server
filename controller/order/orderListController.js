import List_Order from '../../models/Order/orderList.js';

//all order list items
export const allOrderList = async (req, res)=>{
  const listOrderAll = await List_Order.find();
  try {
    if(listOrderAll.length === 0){
      return res.status(200).json({message: 'No se encontraron datos de orden de ventas'})
    }else{
      return res.status(200).json(listOrderAll);
    }
  } catch (err) {
    return res.status(500).json({message: 'Error de coherencia'})
  }
};

//by ID order list
export const byIDOrderList = async (req, res)=>{
  const { id } = req.params;
  const listOrderByID = await List_Order.findById(id);
  try {
    return res.status(200).json(listOrderByID);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo encontrar ningun dato'})
  }
}

//create order list
export const createOrderList = async (req, res)=>{
  const listOrderCreate = await List_Order.create(req.body);
  try {
    return res.status(200).json(listOrderCreate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo crear la orden'})
  }
};

//update order list
export const updateOrderList = async (req, res)=>{
  const { id } = req.params;
  const listOrderUpdate = await List_Order.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(200).json(listOrderUpdate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo actualizar la orden'});
  }
}

//delete order list
export const deleteOrderList = async (req, res) => {
  const {id} = req.params;
  const listOrderDelete = await List_Order.findByIdAndDelete(id);
  try {
    return res.status(200).json({message: 'Orden eliminada correctamente la orden'});
  } catch (err) {
    return res.status(500).json({message: 'No se pudo eliminar la orden'}); 
  }
};

//get Order List By Order
export const getOrderListByOder = async (req, res)=>{
  const {id} = req.params;
  const response  = await List_Order.find({sale:id});
  try {
    return res.status(200).json(response)
  } catch (err) {
    return res.status(500).json({message:'no se puedo encontrar'})
  }
}

