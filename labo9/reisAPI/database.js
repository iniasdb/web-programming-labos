const mysql = require("mysql")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "node",
    password: "node",
    database: "test"
})

module.exports = pool