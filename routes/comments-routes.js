const express = require('express');

const router = express.Router();

const queries = require('../db/comments-queries');
const { isValidId } = require('../middleware/validate');

router.get('/', (req, res, next) => {
    queries.getAll()
        .then(comments => res.json(comments))
        .catch(next);
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id)
        .then(comment => {
            if (comment) res.json(comment);
            else next();
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    queries.create(req.body)
        .then(comments => res.status(201).json(comments[0]))
        .catch(next);
});

router.put('/:id', isValidId, (req, res, next) => {
    queries.update(req.params.id, req.body)
        .then(comments => res.json(comments[0]))
        .catch(next);
});

router.delete('/:id', isValidId, (req, res, next) => {
    queries.delete(req.params.id)
        .then(() => res.status(204).end())
        .catch(next);
});

module.exports = router;