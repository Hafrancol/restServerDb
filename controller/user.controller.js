const Usuario = require("../model/user.model");

const userGet = async (req, res) => {
    const { id } = req.query
    const response = await Usuario.findById(id).exec();
    res.json(response);
};

const userPost = async (req, res) => {
    const body = req.body;
    const usuario= new Usuario(body);
    usuario.password = " 875873409578203958739857398";
    response = await usuario.save();
    console.log(response);
    res.json(response);
};

const userPut = (req, res) => {

};

const userDelete = (req, res) => {

};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}