const {check, validationResult} = require('express-validator');
const studentModel = require('../model/student.model');



const validationStudent =  () => {
    return [
        check('name')
            .notEmpty().withMessage('No puede estar vacio'),
        check('email')
            .notEmpty().withMessage('No puede estar vacio')
            .isEmail().withMessage('Email is obligatorio')
            .custom(async (email) => {
            const isEmail = await studentModel.findOne({email}).exec();
            if(isEmail){
                throw new Error("Email ya existe");
            }
        }),
        check('password')
        .notEmpty().withMessage('La constrasena no puede ser vacia')
        .isStrongPassword().withMessage("Contrasena no es muy fuerte"),

        (req,res, next)=>{
            error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json(error);
            }
            next();
        }
    ]
};


const updateValidationStudent = () => {

    return [
        check('id')
        .isMongoId().withMessage('Debe ser un id valido')
        .custom(async (id) => {
            try {
                await studentModel.findById(id).exec();
            } catch (error) {
                throw new Error(`NO existe usuario con id ${id}`);
            }
        }),

        (req, res, next) => {
            error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json(error);
            }
        
            next();
        }
    ]
}


const getValidationStudent = () => {

    return [

        check('name')
            .notEmpty().withMessage("Nombre no puede ser vacio ")
            .isString().withMessage("Debe ser un texto")
            .isLength({min:5, max:20}).withMessage("Text debe ser minimo 5 caracteres maximo 20"),


        (req, res, next) => {
            error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json(error);
            }
        
            next();
        }

    ];
}



module.exports = {validationStudent, updateValidationStudent, getValidationStudent};