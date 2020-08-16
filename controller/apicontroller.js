var Post = require('../models/post');

exports.post_list = function(req,res,next){
    Post.find({}).exec(
        function(err,result){
            if(err){return next(err);}
            res.json(result);
        }
    )
};

exports.single_post = function(req,res,next){
    Post.findById(req.params.id).exec(
        function(err,result){
            if(err){return next(err);}
            res.json(result);
        }
    )
};

exports.category_posts = function(req,res,next){
    Post.find({ 'category': req.params.id }).exec(
        function(err,result){
            if(err){return next(err);}
            res.json(result);
        }
    )
};