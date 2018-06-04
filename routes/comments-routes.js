const express = require('express');

const router = express.Router();

const queries = require('../db/comments-queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) 
    return next();
    next(new Error('Invalid ID'));
}

// function validAlbum(album) {
//     const hasGenre = typeof album.genre == 'string' && album.genre.trim() != '';
//     const hasArtist = typeof album.artist == 'string' && album.artist.trim() != '';
//     const hasAlbumTitle = typeof album.album_title == 'string' && album.album_title.trim() != '';
//     const hasSpotifyAlbumId = typeof album.spotify_album_id == 'string' && album.spotify_album_id.trim() != '';
//     return hasGenre && hasArtist && hasAlbumTitle && hasSpotifyAlbumId;

// }

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
    if (validComment(req.body)) {
        queries.create(req.body)
            .then(comments => {
                res.status(201).json(comments[0]);
            });
    } else {
        next(new Error('Invalid Comment'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {    
    if (validComment(req.body)) {
        queries.update(req.params.id, req.body)
            .then(comments => {
                res.status(201).json(comments[0]);
            });
    } else {
        next(new Error('Invalid Comment'));
    }
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