import Suppliers from "../../models/Supplier/Supplier.js";

//get mostrar post crear put update

//all suppliers
export const allSuppliers = async (req, res) => {
  const supplier = await Suppliers.find();
  try {
    return res.status(200).json(supplier);
  } catch (error) {
    return res.status(500).json({message: 'no se obtuvieron datos'});
  }
};

//all supplier byid
export const allByIDSuppliers = async (req, res) => {
  const { id } = req.params;
  const supplierById = await Suppliers.findById(id);
  try {
    return res.status(200).json(supplierById);
  } catch (error) {
    return res.status(500).json({message: 'No se encontro proovedor, compruebe los datos'});
  }
}

//create supplier
export const createSupplier = async (req, res) => {
  const supplierCreate = await Suppliers.create(req.body);
  try {
    return res.status(200).json(supplierCreate);
  } catch (error) {
    return res.status(500).json({message: 'Proveedor no registrado'});
  }
}

//update supplier

export const updateSupplier = async (req, res) => {
  const {id} = req.params;
  const supplierUpdate = await Suppliers.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(200).json(supplierUpdate);
  } catch (error) {
    return res.status(500).json({message: 'No se pudo actualizar'})
  }
}

//delete supplier
export const deleteSupplier = async (req, res) => {
  const {id} = req.params;
  //yo lo pondria solamente asì await Suppliers.findByIdAndDelete(id); 
  const supplierDelete = await Suppliers.findByIdAndDelete(id);
  try {
      return res.status(200).json({message: 'Registros borrados correctamente'});
  } catch (error) {
    return res.status(500).json({message: 'No se pudo Elimnar'});
  }
}