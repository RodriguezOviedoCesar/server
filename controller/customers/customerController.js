import Customers from "../../models/Customers/Customers.js";

//get all customers
export const allCustomers = async (req, res)=>{
  const customers = await Customers.find();
  try{
    return res.status(200).json(customers);
  }catch(err){
    return res.status(500).json({message:'no se obtuvieron datos'});
  };
};

//get customers id 
export const allByIDCustomers = async (req, res) =>{
  const { id } = req.params;
  const customersById = await Customers.findById(id);
  try{
    return res.status(200).json(customersById);
  }catch(err){
    return res.status(500).json({message:'No se encontro el cliente'});
  };
};

//create customer
export const createCustomer = async (req, res) =>{
  const customerCreate = await Customers.create(req.body);
  try {
    return res.status(200).json(customerCreate);
  } catch (err) {
      return res.status(500).json({message: 'No se pudo crear usuarios'})
  };
};

//update customer
export const updateCustomer = async (req, res) =>{
  const {id} = req.params;
  const customerUpdate = await Customers.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(200).json(customerUpdate)
  } catch (err) {
    return res.status(500).json({message: 'No se puedo atualizar el cliente'})
  };
};

//delete customer
export const deleteCustomer = async (req, res) =>{
  const {id} = req.params;
  const customerDelete = await Customers.findByIdAndDelete(id);
  try {
    return res.status(200).json({message: 'Cliente eliminado correactamente'})
  } catch (err) {
    return res.status(500).json({message: 'No se puedo eliminiar al cliente'});
  };
};


//search for customers for usarname
export const searchByUsername = async (req, res) =>{
  const { name } = req.params;
  const customers = await Customers.findOne({name: {id:name}});
  try {
    return res.status(200).json(customers);
  } catch (err) {
    return res.status(500).json({message: 'No se encuentra el usuario'});
  }
}