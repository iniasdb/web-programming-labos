const express = require("express")
const pool = require("../database")

const router = express.Router();

let trips = []

router
  .route("/")
  .post((req, res)=> {
    pool.getConnection( (err, conn) => {
        if (err) {
            console.log(err)
        } else {
            let sql = `INSERT INTO trips (naam, kosten) VALUES ("${req.body.bestemming}", ${req.body.kosten})`;

            conn.query(sql, (err, rows) => {
                conn.release()
                if (err) {
                    console.log(error)
                    res.status(500).send(error);
                } else {
                    res.sendStatus(200)
                }
            });
        }
    });
  })
  .get((req, res)=> {
    pool.getConnection((err, conn) => {
        if (err) throw err

        let sql = "SELECT * FROM trips";
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

router
  .route("/:tripid")
  .put((req, res)=> {
    pool.getConnection((err, conn) => {
        if (err) throw err

        let sql = `UPDATE trips SET kosten=kosten+${req.body.kost} WHERE id=${req.params.tripid}`;
        conn.query(sql, (err, rows) => {
            conn.release();
            if (!err) {
                res.sendStatus(200);
            } else {
                console.log(err);
                res.sendStatus(500)
            }
        });

    });
})
.get((req, res)=> {
    pool.getConnection((err, conn) => {
        if (err) throw err

        let sql = `SELECT * FROM trips WHERE id = "${req.params.tripid}"`;
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