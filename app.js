const express = require("express");

const router = require("./src/routes/product.routes");

const errormiddleware = require("./src/middlewares/error.middleware");
const loggermiddleware = require("./src/middlewares/logger.middleware");

const app = express();

app.use(express.json());

app.use(loggermiddleware);

app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send("StoreForge Running at 5000");
});

app.listen("5000", () => {
  console.log("Server Running at 5000");
});

app.use(errormiddleware);
