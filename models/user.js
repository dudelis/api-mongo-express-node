const mongoose = require('mongoose');
const validate = require('mongoose-validate');

const UserSchema = mongoose.Schema({
    first: {type: String},
    last: {type:String},
    email: {
        type:String,
        lowercase:true,
        trim: true,
        index: true,
        unique: true,
        sparse: true,
        validate:[validate({
            validator: 'isEmail',
            message: 'Not a valid email.',
        }),]
    },
    password: {type:String},
},{timestamps: true});

//Before updating, encrypting the password
UserSchema.pre('save', async function(next){

    if(this.isModified('password') || this.isNew){
        let err, salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if(err) TE(err.message, true);
        [err, hash] = await to(bcrypt.hash(this.password, salt));
        if(err) TE(err.message, true);
        this.password = hash;
    } else{
        return next();
    }
});
UserSchema.methods.comparePassword = async function(pw){
    let err, pass;
    if(!this.password) TE('password not set');

    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if(err) TE(err);

    if(!pass) TE('invalid password');

    return this;
}