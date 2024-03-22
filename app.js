require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const url = process.env.MONGO_URL;
const productRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>store api</h1> <a href="/api/v1/products">product route</a>`);
})

//routes
app.use("/api/v1/products", productRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 2000;

const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, () => {
      console.log(`server started successfully at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
