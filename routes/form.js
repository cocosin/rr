"use strict";
let express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    Schema = mongoose.Schema,
    db = mongoose.connection,
    postSchema = new Schema({
        title: String,
        content: {
            text: String,
            main_image: String
        },
        date: Date,
        active: Boolean
    }),
    Post = mongoose.model('Post', postSchema);

mongoose.connect('mongodb://localhost/rwm');

db.on('open', (ref) => {
});

db.once('open', function (callback) {
    console.log('DB is working!');
});


router.post('/', (req, res) => {
    var posted = new Post({
        title: req.body.text,
        content: {
            text: req.body.text,
            main_image: null
        },
        date: new Date(),
        active: true
    });

    posted.save((err, response) => {
        if (err) return console.error(err);
        console.log('is done!', response);
    });


    Post.find({"text":"werewrwerwe"}, function(err, users) {
        res.send(users.reduce(function(userMap, item) {
            userMap[item.id] = item;
            return userMap;
        }, users));
        console.log(users);
    });
});

module.exports = router;