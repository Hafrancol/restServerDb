const Student = require("../model/student.model");
var bcrypt = require('bcryptjs');




const studentGet = async (req, res) => {
    try {
            const {skip = 0, limit = 5} = req.query;
            const [total, usuarios] = await Promise.all([ 
                Student.countDocuments(),
                Student.find({})
                    .skip(parseInt(skip))
                    .limit(parseInt(limit))
                ])

            res.json({total, usuarios});

        
    } catch (error) {
        console.error(error);
    }

};

const studentSearchGet = async (req, res) => {
    try {
            const {name} = req.query;
            console.log(req.query);
            const user = await Student.find({name}).exec();
            res.json(user);

        
    } catch (error) {
        console.error(error);
    }
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

const studentPut = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    const body = req.body;
    console.log(body);
    const resp = await Student.findByIdAndUpdate(id, body).exec();
    console.log(resp);
    res.json({msg: " Usuario update"});
}

module.exports = {
    studentGet,
    studentSearchGet,
    studentPost,
    studentDelete,
    studentPut
}