'use strict';
const fetch = require('node-fetch'),
    express = require('express');
let router = express.Router();

router.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
    res.setHeader("Expires", "0"); // Proxies.
    next();
});

router.get('/', (req, res) => {
    res.render('index.html');
});

// ?index=0~
router.get('/review', (req, res) => {
    fetch(`http://api.plating.co.kr/review/reviewList?page=${req.query.index}&menuIdx=${req.query.menuIdx}`, {
        // : //
    }).then(response =>
        response.json()
    ).then(json =>
        res.json(json)
    ).catch(err => {
        console.log('parsing failed', err);
        res.status(500).send(err);
    });
});

module.exports = router;