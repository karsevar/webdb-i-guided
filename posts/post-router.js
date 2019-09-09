const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    // get data from database and return it to the client:
    // select * from posts;

    // all db operations return a promise
    // A shortcut for the below command is db('posts')
    // You can also select particular columns using this short cut
    // db('posts').select('title', 'contents')
    db.select('id', 'title', 'contents').from('posts') 
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    db('posts').where({id})
        .first()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/', (req, res) => {
    // insert into posts () values () 
    const postData = req.body;
    // validate the data before inserting into db

    db('posts').insert(postData, 'id')
        .then(([results]) => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.json(error);
        })
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;