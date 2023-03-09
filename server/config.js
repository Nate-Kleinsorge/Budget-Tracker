import * as dotenv from "dotenv";
dotenv.config();
export const MONGODB_URI = 
process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/budget-tracker";
export const PORT = process.env.PORT || 3002;
export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION