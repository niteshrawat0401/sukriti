const {Router} = require('express');
const { signUpUser, signInUser, resetPassword } = require('../controller/user');

const userRouter = Router();
userRouter.post('/signUp', signUpUser);
userRouter.post('/signIn', signInUser);

module.exports = userRouter;