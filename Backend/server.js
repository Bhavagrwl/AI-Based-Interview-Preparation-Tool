require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");
const serverless = require("serverless-http");

// connectToDB();

// app.listen(3000, () => {
//   console.log("Server on 3000");
// });

// app.listen(3000, "0.0.0.0", () => {
//   console.log("Server running");
// });

let isConnected = false;

const connectDB = async () => {
  if (!isConnected) {
    await connectToDB();
    isConnected = true;
  }
};

const handler = serverless(app);

module.exports = async (req, res) => {
  await connectDB();
  return handler(req, res);
};
