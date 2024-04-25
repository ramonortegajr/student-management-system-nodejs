const { json } = require('express');
const con = require('../database/connection');

exports.home = (req, res) => {
    res.render('home');
}

//insert student info to database
exports.create = async (req, res) => {
    const { name, batch, gender, department, phone, email } = req.body;
    const insertData = [name, batch, gender, department, phone, email];

    try {
        const rows = await new Promise((resolve, reject) => {
            con.query('INSERT INTO tb_student SET student_name = ?, student_batch = ?, student_gender = ?, student_department = ?, student_phone = ?, student_email = ?', insertData, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
        res.render('home');
        console.log('Inserted rows:', rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

//fetch the list of students from database and display in the table
exports.fetch = async (req, res) => {

    try {
        const rows = await new Promise((resolve, reject) => {
            con.query('SELECT * FROM tb_student', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    res.render('students', { students: rows });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};

//edit student info 
exports.edit = async (req, res) => {
    const studentId = req.params.id;
    const studentData = getStudentData(studentId);

    try {
        const rows = await new Promise((resolve, reject) => {
            con.query('SELECT * FROM tb_student WHERE id = ?', [req.params.id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
        res.render('edit-student', {student: studentData});
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}