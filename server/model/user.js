const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    name: String,
    userName: String,
    passWord: String
})

const Users = model('user', userSchema);
module.exports = Users;