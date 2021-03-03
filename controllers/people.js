const express = require('express')
const router = express.Router()
const postgres = require('../postreg.js')

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    })
})
router.post('/', (req, res) => {
    postgres.query(`INSERT INTO people (name, age) VALUES ('${req.body.name}', ${req.body.age})`), (err, result) => {
        postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, result) => {
            res.json(results.rows)
        })
    }
})
router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM people WHERE id = '${req.params.id}', AGE = ${req.body.age} WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, result) => {
            res.json(results.rows)
        })
    })
})
module.exports = router