import { Router } from "express";
import * as usersController from "../controller/users.js";
import * as userValidations from "../models/User.js";

const usersRoute = Router();

usersRoute
  .post(
    "/user",
    userValidations.password,
    userValidations.username,
    usersController.createNewUser
  )
  .get("/users", usersController.getAllUsers)
  .get("/user/:id", usersController.getUser)
  .put(
    "/user/:id",
    userValidations.password,
    userValidations.username,
    usersController.updateUser
  )
  .delete("/user/:id", usersController.deleteUser);

export default usersRoute;
