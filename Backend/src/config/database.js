// const mongoose = require("mongoose");

// async function connectToDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to DB");
//   } catch (err) {
//     console.log(err);
//   }
// }

// module.exports = connectToDB;

const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false, // 🔥 IMPORTANT
    });
  }

  cached.conn = await cached.promise;
  console.log("✅ DB Connected");

  return cached.conn;
}

module.exports = connectToDB;
