const { json } = require('express');
const con = require('../database/connection');
const { name } = require('ejs');

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

// edit student info
exports.edit = async (req, res) => {

    try {
        const student = await new Promise((resolve, reject) => {
            con.query('SELECT * FROM tb_student WHERE student_id = ?', [req.params.id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]); // Assuming only one student with the given ID exists
                }
            });
        });
        res.render('edit-students', { student }); // Pass the student data to the rendering template
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//update info in mysql
exports.update = async (req, res) => {
    const { name, batch, gender, department, phone, email } = req.body;
    const updateData = [name, batch, gender, department, phone, email, req.params.id];

    try {
        const student = await new Promise((resolve, reject) => {
            con.query('UPDATE tb_student SET student_name = ?, student_batch = ?, student_gender = ?, student_department = ?, student_phone = ?, student_email = ? WHERE student_id = ?', updateData, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]); // Assuming only one student with the given ID exists
                }
                });
        });
        res.redirect('/students');
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//delete data from database
exports.delete = (req, res) => {

    try {
        con.query('DELETE FROM tb_student WHERE student_id = ?', [req.params.id], (err, results) => {
            if (err) {
                console.log('Internal Error');
            } else {
                res.redirect('/students');
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}