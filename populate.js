require("dotenv").config()

const url = process.env.MONGO_URL; 
const connectDB = require("./db/connect")
const jsonProduct = require("./products.json")
const product =require("./models/product")


const start = async () => {
  try {
    await connectDB(url);
    await product.deleteMany()
    await product.create(jsonProduct)
    console.log("success!!!")
    process.exit(0)
}
catch (error) {
    console.log(error);
    process.exit(1)
  }}
;
start();
