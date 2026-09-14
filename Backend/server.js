// require("dotenv").config();
// const app = require("./src/app");
// const connectToDB = require("./src/config/database");
// const serverless = require("serverless-http");

// // connectToDB();

// // app.listen(3000, () => {
// //   console.log("Server on 3000");
// // });

// // app.listen(3000, "0.0.0.0", () => {
// //   console.log("Server running");
// // });

require("dotenv").config();
const serverless = require("serverless-http");

const app = require("./src/app");
const connectToDB = require("./src/config/database");

const handler = serverless(app);

module.exports = async (req, res) => {
  await connectToDB(); // ensures connection
  return handler(req, res);
};
