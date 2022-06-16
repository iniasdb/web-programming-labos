const express = require("express")
const pool = require("../database")

const router = express.Router();

router
  .route("/")
  .get((req, res)=> {
    pool.getConnection((err, conn) => {
        if (err) throw err

        let sql = "SELECT SUM(kosten) FROM trips";
        conn.query(sql, (err, rows) => {
            conn.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
                res.sendStatus(500)
            }
        });

    });
});

module.exports = router;