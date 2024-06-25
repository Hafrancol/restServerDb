const Student = require("../model/student.model");
var bcrypt = require('bcryptjs');
const { validationResult} = require("express-validator")



const studentGet = async (req, res) => {
    try {
        const { name } = req.query;
        hasName = await Student.find({ name });
        console.log(hasName);
        res.json(hasName)
    } catch (error) {
        console.error(error);
    }
    // true
};

const studentPost = async (req, res) => {
    try {
        studenBody = req.body;

        var salt = bcrypt.genSaltSync(10);
        const student = new Student(studenBody);
        console.log(student.password);
        student.password = bcrypt.hashSync(studenBody.password, salt);
        const resdatabase = await student.save();
        res.send(resdatabase);
    } catch (error) {
        console.log(new Error(error));
        res.status(401);
        res.send(error);
    }
};

const studentDelete = (req, res) => {

};

const studentPut = (req, res) => {
    const {id} = req.params;
    console.log(id);
    const body = req.body;
    console.log(body);
    const resp = Student.findByIdAndUpdate(id, {body});
    console.log(resp);
    res.json({msg: " Usuario update"});
}

module.exports = {
    studentGet,
    studentPost,
    studentDelete,
    studentPut
}