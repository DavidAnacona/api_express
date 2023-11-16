import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'database-1.c5zuq7drfcgu.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'davidanacona',
    port: 3306,
    database: 'mydb'
})