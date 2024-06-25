const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "The name is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "The email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "The password is required"]
    },
    img: String,
    rol:{
        type: Boolean,
        default: true
    },
    status: {
        type: Boolean,
        default: true
    }

})

module.exports = model("user", userSchema); // here we export userModel