import User from "./models/User.js";
import { MONGODB_URI } from "./config.js";
import mongoose from "mongoose";
console.log(MONGODB_URI);
await mongoose.connect(MONGODB_URI);
await User.deleteMany();
await User.create({email: "larry@gmail.com", firstName: "Larry", lastName: "Simpson", password:"Bears1234"})
console.log('seeded')