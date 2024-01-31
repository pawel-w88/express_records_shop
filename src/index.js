import express from "express";
import recordsRoute from "./routes/recordsRoute.js";
import ordersRoute from "./routes/ordersRoute.js";
import usersRoute from "./routes/usersRoute.js";
import bodyParser from "body-parser";
import corsMiddleware from "./middlewares/middlewares.js";

import dotenv from "dotenv";
dotenv.config();

import "./configs/db.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

/** MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/records/middleware", corsMiddleware, (req, res) => {
  console.log("Test...");
  res.send("middleware-test");
});

/** ROUTES */
app.use("/api", recordsRoute);
app.use("/api", usersRoute);
app.use("/api", ordersRoute);

/**ERROR */
app.use((req, res) => {
  res.status(404).json({ msg: "Page not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
