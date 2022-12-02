import Product_Brands from "../../models/Product/Product_Brands.js";

//all brands
export const allBrands = async (req, res)=>{
  const brandAll = await Product_Brands.find();
  try {
    return res.status(200).json(brandAll);
  } catch (err) {
    return res.status(500).json({message: 'No se encontraron marcas disponibles'});
  };
};

//By Id brands
export const brandByID = async (req,res)=>{
  const {id} = req.params;
  const byIDBrand = await Product_Brands.findById(id);
  try {
    return res.status(200).json(byIDBrand);
  } catch (err) {
    return res.status(500).json({message: 'No se encontraron marca'});
  };
};

//create a brand
export const createBrand = async (req, res)=>{
  const brandCreate = await Product_Brands.create(req.body);
  try {
    return res.status(200).json(brandCreate);
  } catch (err) {
    return res.status(500).json({message: 'No se pudo crear marca'});
  };
};

//update a brand
export const updateBrand = async (req, res)=>{
  const {id} = req.params;
  const brandUpdate = await Product_Brands.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(200).json(brandUpdate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo actualizar marca'});
  };
};

//delete a brand
export const deleteBrand = async (req, res)=>{
  const { id } = req.params;
  const brandDelete = await Product_Brands.findByIdAndDelete(id);
  try {
    return res.status(200).json({message: 'Marca eliminado correctamente'});
  } catch (err) {
    return res.status(500).json({message: 'No se puedo eliminar marca'});
  }
}