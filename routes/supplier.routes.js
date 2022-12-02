import { Router } from 'express'
import { allSuppliers, createSupplier, allByIDSuppliers, updateSupplier, deleteSupplier } from '../controller/supplier/supplierController.js';

const supplierRouter = Router();

supplierRouter.get('/', (req, res)=>{
  res.send({
    message: 'Inicio supplier'
  })
})

supplierRouter.get('/supl', allSuppliers);
supplierRouter.post('/create', createSupplier);
supplierRouter.get('/supl/:id', allByIDSuppliers);
supplierRouter.put('/supl/:id', updateSupplier);
supplierRouter.delete('/supl/:id', deleteSupplier);


export default supplierRouter;