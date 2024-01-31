import { Router } from "express";
import * as orderController from "../controller/orders.js";

const ordersRoute = Router();

ordersRoute
  .post("/order", orderController.createNewOrder)
  .get(
    "/orders",
    orderController.getAllOrders
    // Get records from the database and send them as response
  )
  .get(
    "/order/:id",
    orderController.getOrder
    // Get a specific record by ID from the database and send it as response
  )
  .put(
    "/order/:id",
    orderController.updateOrder
    // Update a specific record by ID in the database
  )
  .delete(
    "/order/:id",
    orderController.deleteOrder
    // Delete a specific record by ID from the database
  );

export default ordersRoute;
