import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "ingenium-user",
  password: process.env.DB_PASSWORD,
  database: "ingenium-db",
  waitForConnections: true,
  connectionLimit: 10,
});

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'kartikey',
//   password: 'StrongPassword123!',
//   database: 'test_project',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "ingenium_user",
//   password: "StrongPassword123!",
//   database: "ingenium_db",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

export default pool;
