var mongoose = require('mongoose');
mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    created_at: {type: Date, default: Date.now}
});

var postSchema = new mongoose.Schema({
    created_at: {type: Date, default: Date.now},
    created_by: {type: Schema.ObjectId, ref: 'User'},
    text: String,
});

mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);