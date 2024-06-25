const { Router } = require("express");
const { studentGet, studentPost, studentDelete, studentPut} = require("../controller/students.controller")
const {validationStudent} = require('../validations/validationStudent')


const router = Router();


router.get('/', studentGet );

router.post('/', validationStudent(), studentPost);

router.delete('/', studentDelete);

router.put('/:id', studentPut);

module.exports = router;