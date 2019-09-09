const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    // get data from database and return it to the client:
    // select * from posts;

    // all db operations return a promise
    db.select('*').from('posts') 
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;