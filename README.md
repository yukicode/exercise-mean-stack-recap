# mean-recap
Follow the tutorial [Mean Stack Tutorial for Beginners](https://github.com/hwz/chirp), learn mean stack.

### Backend Node and Express init:
```
npm install express-generator -g
```
```
express --ejs . 
```
(using ejs engine)
```
npm install
```
(install all the dependencies)

Replace routers with my own
```
npm start
```
Start server

### Backend Express Router:
```
//Notice "/posts/..." instead of "./posts/..."
//:id represent parameters
//no parameter should be set in a different route

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
```
Debug with postman
`http://localhost:3000/api/posts/123`  Method: GET/POST/PUT/DELETE

### Authentication set up
```
npm install passport passport-local bcypt-nodejs express-session --save 
```

Use passport: 
```
app.use(passport.initialize());
app.use(passport.session());
```

### Implement Authentication
(in passport-init.js)
Implement signup, login, serialize and deserialize.
