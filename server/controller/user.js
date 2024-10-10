const Users = require("../model/user");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const signUpUser = async(req, res)=>{
    try {
        const {name, userName, passWord} = req.body;
        const hashPassword = await bcrypt.hash(passWord, 10);
        const newUser = await Users.create({name, userName, passWord: hashPassword});
        return res.status(200).json({message: "Newuser Created", newUser})
    } catch (error) {
        return res.status(500).json({message: "Server Error", error: error.message})      
    }
}

const signInUser = async(req, res)=>{
    const {userName, passWord} =  req.body;
    try {
        const user = await Users.findOne({userName: userName});
        if(!user){
            return res.status(400).json({msg: 'user does not match'});
        }
        let matchUser = await bcrypt.compare(passWord, user.passWord)
        if(matchUser){
            const token = jwt.sign({id: user._id, userName: userName}, 'secretcode', {expiresIn: '1hr'})
            return res.status(200).json({msg: 'sign successfully', userName, token});
        }
        else{
            return res.status(400).json({message: 'Invalid PassWord'});
        }
    } catch (error) {
        return res.status(500).json({message: 'server error', error: error.message});
    }
}

module.exports = {
    signUpUser,
    signInUser,
}