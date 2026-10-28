const mongoose = require("mongoose");

const mongoDB = process.env.URL_MONGO;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log("Connected to MongoDB");
}