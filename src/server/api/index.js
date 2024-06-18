const express = require("express");
const cors = require("cors");
const app = express();
const { client } = require("./db");
const { router: authRouter, authenticateToken } = require("../auth/index");

app.use(express.json());

app.use(cors());

client.connect();

app.use("/api/users", require("./users"));
app.use("/api/products", require("./products"));
app.use("/api/orders", require("./orders"));
app.use("/api/order_products", require("./order_products"));
app.use("/auth", authRouter);

app.listen(8080, () => {
  console.log("App is running at port 8080");
});
