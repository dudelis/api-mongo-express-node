const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name: {type:String},
    users:  [ 
        {
            user:{
                type : mongoose.Schema.ObjectId,
                ref : 'User'
            },
            permissions:[
                {
                    type:String
                }
            ]
        }
    ],
}, {
    timestamps: true
});
CompanySchema.methods.toWeb = function(){
    const json = this.toJSON();
    json.id = this._id;//this is for the front end
    return json;
};

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company