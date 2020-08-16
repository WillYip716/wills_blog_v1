const mongoose = require('mongoose');
var moment = require('moment');
const Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        title: {type:String, required: true},
        description: {type:String, required:true },
        timestamp: { type: Date, default: Date.now() },
        category: {type:String, required: true},
        tags: [{type:String}],
        article: {type:String, required:true },
        imageUrl: {type: String, required: true, default:''},
        published: {type:Boolean, default: false}
    }
);

PostSchema
.virtual('posted')
.get(function () {
  return moment(this.timestamp).format('MMMM Do YYYY, h:mm:ss a');
});



module.exports = mongoose.model('Post', PostSchema);