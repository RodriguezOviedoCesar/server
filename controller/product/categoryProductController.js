import Product_Category from "../../models/Product/Product_Category.js";

//all category
export const allCategory = async (req, res)=>{
  const categoryAll = await Product_Category.find();
  try {
    return res.status(200).json(categoryAll);
  } catch (err) {
    return res.status(500).json({message: 'No se encontraron registros'});
  }
};

//By id category
export const byIDCategory = async (req, res)=>{
  const {id} = req.params;
  const categotyByID = await Product_Category.findById(id);
  try {
    return res.status(200).json(categotyByID);
  } catch (err) {
    return res.status(500).json({message: 'No se encontraron registros'});
  }
};

//create category
export const createCategory = async (req, res)=>{
  const categoryCreate = await Product_Category.create(req.body);
  try {
    return res.status(200).json(categoryCreate);
  } catch (err) {
    return res.status(500).json({message:'No se puedo crear la categoria'});
  }
};

//update category
export const updateCategory = async (req, res)=>{
  const { id } = req.params;
  const categoryUpdate = await Product_Category.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(200).json(categoryUpdate);
  } catch (err) {
    return res.status(500).json({message: 'No se puedo actualizar categoria'})
  }
}

//delete category
export const deleteCategory = async (req, res)=>{
  const { id } = req.params;
  const categoryDelete = await Product_Category.findByIdAndDelete(id);
  try {
    return res.status(200).json({message:'Categoria eliminada correctamente'})
  } catch (err) {
    return res.status(500).json({message:'No se puedo eliminar la categoria'})
  }
}