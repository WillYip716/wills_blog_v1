const express = require('express');
const router = express.Router();
var Post = require('../models/post');

const api_controller = require("../controller/apicontroller");

router.get('/posts',api_controller.post_list);

router.get('/post/:id',api_controller.single_post);

router.get('/category', api_controller.category_posts);


module.exports = router;