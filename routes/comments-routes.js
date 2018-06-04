const express = require('express');

const router = express.Router();

const queries = require('../db/comments-queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id))
        return next();
    next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
    queries.getAll()
        .then(comments => {
            res.json(comments);
        });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id)
        .then(comment => {
            if (comment) {
                res.json(comment);
            } else {
                next();
            }
        });
});

router.post('/', (req, res, next) => {
    queries.create(req.body)
        .then(comments => {
            res.status(201).json(comments[0]);
        });
});

router.put('/:id', isValidId, (req, res, next) => {
    queries.update(req.params.id, req.body)
        .then(comments => {
            res.status(201).json(comments[0]);
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