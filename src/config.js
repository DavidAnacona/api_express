import { config } from "dotenv"

config()

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "database-1.c5zuq7drfcgu.us-east-2.rds.amazonaws.com";
export const DB_USER = process.env.DB_USER || "admin";
export const DB_PASSWORD = process.env.DB_PASSWORD || "davidanacona";
export const DB_DATABASE = process.env.DB_DATABASE || "mydb";
export const DB_PORT = process.env.DB_PORT || 3306;