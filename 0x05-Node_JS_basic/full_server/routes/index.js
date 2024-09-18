const express = require('express');
const { getHomepage } = require('../controllers/AppController');
const { getAllStudents, getAllStudentsByMajor } = require('../controllers/StudentsController');

const router = express.Router();

router.route('/').get(getHomepage);
router.route('/students').get(getAllStudents);
router.route('/students/:major').get(getAllStudentsByMajor);

module.exports = router;
