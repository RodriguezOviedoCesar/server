import Products from "../../models/Product/Product.js";


//allget products
export const allProducts = async (req, res)=>{
  //.populate es para traer los datos de los elementos referencidos, lo tienes que poner tal cual esta en la base de datos
  //const products = await Products.find().populate('user').populate('supplier');;
  const products = await Products.find().populate('brand',['name']).populate('category',['name']);
  try {
    return res.status(200).json(products);
  } catch (error) {
    return res. status(500).json({message: 'No se pudo registrar el producto'})
  }
} 

//byid get products
export const productById = async (req, res)=>{
  const {id} = req.params;
  const productId = await Products.findById(id).populate('brand',['name']).populate('category',['name']);
  try {
    return res.status(200).json(productId);
  } catch (error) {
    return res.status(500).json({message: 'No se encontro producto'})
  }
}

//create product
export const createProduct = async (req, res) => {
  const productToCreate = await Products.create(req.body);
  try {
    return res.status(200).json(productToCreate)
  } catch (error) {
    return res.status(500).json({message: 'Producto no creado'})
  }
}

//update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateProduct = await Products.findByIdAndUpdate(id, req.body, {new:true})
  try {
    return res.status(200).json(updateProduct)
  } catch (error) {
    return res.status(500).json({message: 'No se puedo actualizar le producto'})
  }
}

//delete product 
export const deleteProduct = async (req, res) => {
  const {id} = req.params;
  const deleteProduct = await Products.findByIdAndDelete(id);
  try{
    return res.status(200).json({message: 'Producto eliminado'})
  }catch(err){
    return res.status(500).json({message: 'No se pudo eliminar el producto'})
  }
}

//search for products by username
export const searchByUsername = async (req, res) => {
  const { username } = req.params.user;
  const nam = await Products.findOne({user:{username}})
  try {
    return res.status(200).json(nam)
  } catch (err) {
    return res.status(500).json({message:'no se puedo encontrar'})
  }
}