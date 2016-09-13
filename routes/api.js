var express = require('express');
var router = express.Router();

router.route('/posts')

    //returns all posts
    .get(function(req, res){
        res.send({message: "TODO return posts"});
    })
    .post(function(req, res){
        res.send({message: "TODO create new post"});
    });

router.route('/posts/:id')
    .get(function(req, res){
        res.send({message: "todO RETURN POST WITH ID", id: req.params.id});
    })
    .put(function(req, res){
        res.send({message: "Todo modify post with id", id: req.params.id});
    })
    .delete(function(req, res){
        res.send({message: "TODO delete", id: req.params.id});
    });

module.exports = router;