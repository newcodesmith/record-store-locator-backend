const express = require('express');

const router = express.Router();

const queries = require('../db/stores-queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id))
        return next();
    next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
    queries.getAll()
        .then(stores => {
            res.json(stores);
        });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id)
        .then(store => {
            if (store) {
                res.json(store);
            } else {
                next();
            }
        });
});

router.post('/', (req, res, next) => {
    queries.create(req.body)
        .then(stores => {
            res.status(201).json(stores[0]);
        });
});

router.put('/:id', isValidId, (req, res, next) => {
    queries.update(req.params.id, req.body)
        .then(stores => {
            res.status(201).json(stores[0]);
        });
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id)
        .then(() => {
            res.json({
                delete: true
            });
        });
});

module.exports = router;