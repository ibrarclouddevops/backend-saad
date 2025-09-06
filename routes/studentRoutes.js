const express = require('express');
const router = express.Router();
const { getAllStudents, addStudent ,deleteStudent,updateStudent} = require('../controllers/studentController');

router.get('/getStudents/', getAllStudents);
router.post('/insertStudents/', addStudent);
router.post('/deleteStudent/:id', deleteStudent);
router.put('/updateStudent/:id', updateStudent);

module.exports = router;
