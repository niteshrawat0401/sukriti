const {Router} = require('express');
const { getStudent, editStudent, deleteStudent } = require('../controller/userData');

const userDataRouter = Router();
userDataRouter.get('/getStudent', getStudent);
userDataRouter.put('/editStudent/:id', editStudent);
userDataRouter.delete('/deleteStudent/:id', deleteStudent);

module.exports = userDataRouter;