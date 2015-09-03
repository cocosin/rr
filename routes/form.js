"use strict";
let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
    res.send(JSON.stringify(req.body));
    console.log(req);
});

module.exports = router;