import { Router } from "express";
import { allBrands, brandByID, createBrand, updateBrand, deleteBrand } from "../controller/product/brandProductController.js";

const brandRouter = Router();

brandRouter.get('/', (req, res)=>{
  res.send({
    message: 'Pagnia brands'
  })
});

brandRouter.get('/bra', allBrands);
brandRouter.post('/bra/create', createBrand);
brandRouter.get('/bra/:id', brandByID);
brandRouter.put('/bra/:id', updateBrand);
brandRouter.delete('/bra/:id', deleteBrand);

export default brandRouter;