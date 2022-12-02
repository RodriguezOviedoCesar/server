import { Router } from 'express'
import { allProducts,productById, createProduct, updateProduct, deleteProduct, searchByUsername} from '../controller/product/productController.js';

const productRouter = Router();

productRouter.get( '/', (req, res)=> { 
  res.send({
    message: 'Inicio Producto'
  })
});

productRouter.get('/pro', allProducts);
productRouter.get('/pro/:id', productById);
productRouter.post('/pro/create', createProduct);
productRouter.put('/pro/:id', updateProduct);
productRouter.delete('/pro/:id', deleteProduct);
//productRouter.get('/pro/pro/:name', searchByUsername);

export default productRouter;