
const {check, validationResult} = require('express-validator');

const validationStudent = () => {
    return [
        check('name').notEmpty(),
        check('email')
        .isEmail().withMessage('Email is obligatorio')
        .notEmpty().withMessage('No puede estar vacio'),
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

module.exports = {validationStudent};