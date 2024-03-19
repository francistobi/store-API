require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

//routes
app.use("/api/v1/product", product);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`server started successfully at port ${port}`);
});
