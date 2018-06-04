const express = require('express');

const router = express.Router();

const queries = require('../db/stores-queries');

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
    if (validStore(req.body)) {
        queries.create(req.body)
            .then(stores => {
                res.status(201).json(stores[0]);
            });
    } else {
        next(new Error('Invalid Store'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {    
    if (validStore(req.body)) {
        queries.update(req.params.id, req.body)
            .then(stores => {
                res.status(201).json(stores[0]);
            });
    } else {
        next(new Error('Invalid Store'));
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