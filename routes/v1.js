const express 			= require('express');
const router 			= express.Router();

const CompanyController = require('../controllers/company');
const BlogController = require('../controllers/blog');

// const custom 	        = require('./../middleware/custom');

// const passport      	= require('passport');
// const path              = require('path');

router.get('/', function(req, res, next) {
    res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});

//router.post( passport.authenticate('jwt', {session:false}), CompanyController.create);
router.get('/companies', CompanyController.getAll);
router.post('/companies', CompanyController.create);

//Blogs
router.get('/blogs', BlogController.list);
router.get('/blogs/:id', BlogController.read);
router.post('/blogs', BlogController.create);
router.put('/blogs/:id', BlogController.update);
router.delete('/blogs/:id', BlogController.delete)


module.exports = router;