const db = require('../config/db');

const getAllStudents = (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const addStudent = (req, res) => {
  const { name, age, course } = req.body;
  const query = 'INSERT INTO students (name, age, course) VALUES (?, ?, ?)';
  db.query(query, [name, age, course], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Student added', studentId: result.insertId });
  });
};

const deleteStudent = (req, res) => { 
  const { id } = req.params;
  const query = 'DELETE FROM students WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'deleted' });
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, age, course } = req.body;
  const query = 'UPDATE students SET name = ?, age = ?, course = ? WHERE id = ?';
  
  db.query(query, [name, age, course, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Student updated successfully' });
  });
};


module.exports = { getAllStudents, addStudent, deleteStudent,updateStudent };
