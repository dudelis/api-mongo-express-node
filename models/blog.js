const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: {type:String},
    content: {type: String},
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    // modifiedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    tags: [String]    
}, {
    timestamps: true
});
BlogSchema.methods.toWeb = function(){
    const json = this.toJSON();
    json.id = this._id;//this is for the front end
    return json;
};

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog