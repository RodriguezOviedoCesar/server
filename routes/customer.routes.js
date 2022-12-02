import { Router } from "express";
import { allCustomers, allByIDCustomers ,createCustomer, updateCustomer, deleteCustomer, searchByUsername } from "../controller/customers/customerController.js";

const customersRoute = Router();

customersRoute.get('/',(req, res)=>{
  res.send({
    message: 'Pagina para clientes'
  })
});
customersRoute.get('/cus', allCustomers);
customersRoute.post('/create', createCustomer);
customersRoute.get('/cus/:id', allByIDCustomers);
customersRoute.put('/cus/:id', updateCustomer);
customersRoute.delete('/cus/:id', deleteCustomer);  
//customersRoute.get('/cus/cus/:name', searchByUsername);

export default customersRoute;