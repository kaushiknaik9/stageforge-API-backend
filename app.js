const { Server } = require("socket.io");

const http = require("http");
const express = require("express");
require("dotenv").config();

const prodrouter = require("./src/routes/product.routes");
const authrouter = require("./src/routes/auth.routes");
const uploadrouter = require("./src/routes/upload.routes");

const errormiddleware = require("./src/middlewares/error.middleware");
const loggermiddleware = require("./src/middlewares/logger.middleware");
const ratelimit = require("./src/middlewares/ratelimit.middleware");

const connectDB = require("./src/config/db");

const app = express();

connectDB();

app.use(express.json());

app.use(loggermiddleware);

app.use(ratelimit);

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authrouter);
app.use("/api/products", prodrouter);
app.use("/api", uploadrouter);

app.get("/", (req, res) => {
  res.send("StoreForge Running at 5000");
});

app.use(errormiddleware);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

server.listen(process.env.PORT, () => {
  console.log(`Server Running at ${process.env.PORT}`);
});
