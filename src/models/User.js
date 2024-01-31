import mongoose from "mongoose";
import validator from "express-validator";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

const passwordConfirmation = (value, { req }) => {
  if (value !== req.body.password) {
    throw new Error("passwords do not match");
  }
  return true;
};

const password = validator
  .body("password")
  .isLength({ min: 8, max: 16 })
  .withMessage("Password to short or to long!")
  .not()
  .isIn([
    "password",
    "passwort",
    "password123",
    "passwort123",
    "test1234",
    "00000000",
    "hallo123",
    "helloworld",
    "hallowelt",
  ])
  .withMessage("Invalid password!");

const username = validator
  .body("username")
  .isEmail()
  .withMessage("Username must be an email address!");

  
  export { passwordConfirmation, password, username };
  
  export default User;
