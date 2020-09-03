var Post = require('../models/post');

exports.post_list = function(req,res,next){

    var pageNo = parseInt(req.query.page);
    var size = 10;
    var query = {}
    if(pageNo < 0 || pageNo === 0) {
          response = {"error" : true,"message" : "invalid page number, should start with 1"};
          return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size
    // Find some documents
    Post.countDocuments({},function(err,totalCount) {
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"}
        }
        Post.find({},{},query,function(err,data) {
            // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                var totalPages = Math.ceil(totalCount / size)
                response = {"posts" : data,"pages":totalPages};
            }
            res.json(response);
        });
    })

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

    var pageNo = parseInt(req.query.page);
    var size = 10;
    var query = {}
    if(pageNo < 0 || pageNo === 0) {
          response = {"error" : true,"message" : "invalid page number, should start with 1"};
          return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size
    // Find some documents
    Post.countDocuments({},function(err,totalCount) {
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"}
        }
        Post.find({'category': req.params.category},{},query,function(err,data) {
            // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                var totalPages = Math.ceil(totalCount / size)
                response = {"posts" : data,"pages":totalPages};
            }
            res.json(response);
        });
    })
};

