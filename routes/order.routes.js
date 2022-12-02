import { Router } from "express";
import { allOder, byIDOrder, createOrder, updateOrder, deleteOrder, getOrderByCodigo} from "../controller/order/orderController.js";

const orderRouter = Router();

orderRouter.get('/',(res, req)=>{
  res.send({
    message: 'Pagina para las ventas'
  })
});

orderRouter.get('/ord', allOder);
orderRouter.get('/ord/:id', byIDOrder);
orderRouter.post('/ord/create', createOrder);
orderRouter.put('/ord/:id', updateOrder);
orderRouter.delete('/ord/:id', deleteOrder);
orderRouter.get('/ord/ord/:codigo', getOrderByCodigo);

export default orderRouter;