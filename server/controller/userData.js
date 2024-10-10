const Users = require("../model/user");

const getStudent = async(req, res)=>{
    try {
        const getStudent = await Users.find({})
        if(getStudent.length > 0){
            return res.status(200).json({msg: 'Created student', getStudent});
        }
        else{
            return res.status(200).json({msg: 'no student data', getStudent});
        }
    } catch (error) {
        return res.status(500).json({msg: 'Server error', error:error.msg});
    }
}

const editStudent = async(req, res)=>{
    const {id} = req.params;
    try {
        const editStudent = await Users.findByIdAndUpdate({
            _id:id},req.body , {new: true});
            return res.status(200).json({msg: 'Edit student', editStudent});
    } catch (error) {
        return res.status(500).json({msg: 'Server error', error:error.msg});
    }
}

const deleteStudent = async(req, res)=>{
    const {id} = req.params;
    try {
        const deleteStudent = await Users.findByIdAndDelete({
            _id:id});
            return res.status(200).json({msg: 'delete student', deleteStudent});
    } catch (error) {
        return res.status(500).json({msg: 'Server error', error:error.msg});
    }
}


module.exports = {
    getStudent,
    editStudent,
    deleteStudent
}