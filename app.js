const express = require("express");
require("dotenv").config();

const prodrouter = require("./src/routes/product.routes");
const authrouter = require("./src/routes/auth.routes");
const uploadrouter = require("./src/routes/upload.routes");

const errormiddleware = require("./src/middlewares/error.middleware");
const loggermiddleware = require("./src/middlewares/logger.middleware");

const connectDB = require("./src/config/db");

const app = express();

connectDB();

app.use(express.json());

app.use(loggermiddleware);

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authrouter);
app.use("/api/products", prodrouter);
app.use("/api", uploadrouter);

app.get("/", (req, res) => {
  res.send("StoreForge Running at 5000");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running at ${process.env.PORT}`);
});

app.use(errormiddleware);
