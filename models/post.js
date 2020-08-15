const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        title: {type:String, required: true},
        description: {type:String, required:true },
        timestamp: { type: Date, default: Date.now() },
        tags: [{type:String}],
        article: {type:String, required:true },
        imageUrl: {type: String, required: true, default:''}
    }
);


module.exports = mongoose.model('Post', PostSchema);