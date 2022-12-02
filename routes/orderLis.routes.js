import { Router } from 'express';
import { allOrderList, byIDOrderList, createOrderList, deleteOrderList, getOrderListByOder, updateOrderList } from '../controller/order/orderListController.js';
const orderListRouter = Router();

orderListRouter.get('/ord/lis', allOrderList);
orderListRouter.get('/ord/lis/:id', byIDOrderList);
orderListRouter.post('/ord/lis/create', createOrderList);
orderListRouter.put('/ord/lis/:id', updateOrderList);
orderListRouter.delete('/ord/lis/:id', deleteOrderList);
orderListRouter.get('/ord/lis/lis/:id', getOrderListByOder);

export default orderListRouter;