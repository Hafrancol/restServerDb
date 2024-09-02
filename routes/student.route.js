const { Router } = require("express");
const { studentGet, studentSearchGet, studentPost, studentDelete, studentPut} = require("../controller/students.controller")
const {validationStudent, updateValidationStudent, getValidationStudent} = require('../validations/validationStudent')


const router = Router();

router.get('/',studentGet );

router.get('/search', getValidationStudent(), studentSearchGet );

router.post('/', validationStudent(), studentPost);

router.delete('/', studentDelete);

router.put('/:id',updateValidationStudent(), studentPut);

module.exports = router;