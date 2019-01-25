const Blog = require('../models/blog');

const { to, ReE, ReS } = require('../services/util.js');

module.exports.create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, blog;
    const blog_info = req.body;
    //company_info.users = [{user:user._id}];

    [err, blog] = await to(Blog.create(blog_info));
    if(err) return ReE(res, err, 422);

    return ReS(res,{blog:blog.toWeb()}, 201);
}

module.exports.read = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    [err, blog] = await to(Blog.findById(req.params.id));
    if(err) return ReE(res, err, 422);
    return ReS(res,{blog:blog.toWeb()}, 201);
}
module.exports.update = async function(req, res){
    const blog_info = req.body;
    [err, blog] = await to(Blog.findByIdAndUpdate(req.params.id, blog_info, {new:true}));
    if(err) return ReE(res, err, 422);
    return ReS(res,{blog:blog.toWeb()}, 201);
}
module.exports.delete = async function(req, res){
    [err, blog] = await to(Blog.findByIdAndRemove(req.params.id));
    if(err) return ReE(res, err, 422);
    return ReS(res,{}, 201);
}

module.exports.list = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, blogs;
    [err, blogs] = await to(Blog.find());

    if(err) return ReE(res, err, 422);

    return ReS(res, {blogs});
}



