import { Router } from "express";
import * as recordsController from "../controller/recorde.js";

const recordsRoute = Router();

recordsRoute
  .post("/record", recordsController.createRecord)
  .get(
    "/records",
    recordsController.getAllRecords
    // Get records from the database and send them as response
  )

  .get(
    "/record/:id",
    recordsController.getOneRecord
    // Get a specific record by ID from the database and send it as response
  )
  .put(
    "/record/:id",
    recordsController.updateOneRecord
    // Update a specific record by ID in the database
  )

  .delete(
    "/record/:id",
    recordsController.deleteOneRecord
    // Delete a specific record by ID from the database
  );

export default recordsRoute;
