const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, "nombre es obligatorio"]
    },
    password:{
        type: String,
        required: [true, "Password es obligatoria"]
    },
    email:{
        type: String,
        required: [true, "email es obligatorio"]
    }
})

module.exports = model("student", studentSchema);