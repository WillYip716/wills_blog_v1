const express = require('express');
const router = express.Router();
var Post = require('../models/post');

const api_controller = require("../controller/apicontroller");

router.get('/posts',api_controller.post_list);

router.get('/post/:id',api_controller.single_post);

router.get('/categories/:category', api_controller.category_posts);

router.get('/search', api_controller.search_keyword);


module.exports = router;