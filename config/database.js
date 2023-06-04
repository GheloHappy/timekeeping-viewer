import mysql from "mysql2";

const db = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"timekeeping"
});

export default db;