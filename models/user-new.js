const mongoose = require('mongoose');
const validate = require('mongoose-validate');

const UserSchema = mongoose.Schema({
    first: {type: String},
    last: {type:String},
    email: {
        type:String,
        required: true,
        lowercase:true,
        minlength: 1,
        trim: true,
        unique: true,
        validate:[validate({
            validator: 'isEmail',
            message: 'Not a valid email.',
        }),]
    },
    password: {
        type:String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]
},{timestamps: true});

module.exports 