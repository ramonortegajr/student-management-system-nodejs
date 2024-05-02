const { json } = require('express');
const con = require('../database/connection');
const { name } = require('ejs');

//[ROUTING PAGES]
exports.login = (req, res) => {
    res.render('login');
}
exports.error_page_401 = (req, res) => {
    res.render('./error/401');
}
exports.home = (req, res) => {
    res.render('home');
}
exports.signup = (req, res) => {
    res.render('signup');
}
exports.shortcut = (req, res) => {
    res.render('shortcut', { session: req.session });
}

exports.registration = (req, res) => {
    res.render('registration', { session: req.session });
}

//[DECLARE THE PROMISE ASYNCH AWAIT]
const queryPromise = (sql, data) => {
    return new Promise((resolve, reject) => {
        con.query(sql, data, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

//[CRUD] - [CREATE]
exports.create = async (req, res) => {
    const { name, batch, gender, department, phone, email } = req.body;
    const insertData = [name, batch, gender, department, phone, email];
    try {
        await queryPromise('INSERT INTO tb_student SET student_name = ?, student_batch = ?, student_gender = ?, student_department = ?, student_phone = ?, student_email = ?', insertData);
        res.render('home', { successMessage: 'Data inserted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

//[CRUD] - [READ]
exports.fetch = async (req, res) => {
    try {
        const rows = await queryPromise('SELECT * FROM tb_student');
        res.render('students', { students: rows });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//CRUD - [COUNT TOTAL STUDENTS]
exports.fetch_students = async (req, res) => {
    try {
        const rows = await queryPromise('SELECT * FROM tb_student');
        res.render('dashboard', { totalCount: rows, session: req.session });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//[CRUD] - [UPDATE/EDIT]
exports.edit = async (req, res) => {
    try {
        const [student] = await queryPromise('SELECT * FROM tb_student WHERE student_id = ?', [req.params.id]);
        res.render('edit-students', { student });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//[CRUD] - [UPDATE/EDIT]
exports.update = async (req, res) => {
    const { name, batch, gender, department, phone, email } = req.body;
    const updateData = [name, batch, gender, department, phone, email, req.params.id];
    try {
        await queryPromise('UPDATE tb_student SET student_name = ?, student_batch = ?, student_gender = ?, student_department = ?, student_phone = ?, student_email = ? WHERE student_id = ?', updateData);
        res.redirect('/students');
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//[CRUD] - [DELETE]
exports.delete = (req, res) => {
    try {
        con.query('DELETE FROM tb_student WHERE student_id = ?', [req.params.id], (err, results) => {
            if (err) console.log('Internal Error');
            else res.redirect('/students');
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

//[LOGIN] - [LOGIN TO THE SYSTEM]
exports.signin  = (req, res) => {
    const { account_username, account_password } = req.body;
    try {
        con.query('SELECT * FROM tb_account WHERE account_username = ? AND account_password = ?', [account_username, account_password], (err, results) => {
        if (err) {
            console.error("Error executing the MYSQL query: ", err);
            return res.redirect('/login?error=1');
        }
        if (results.length > 0) {
            const { account_name, account_username, id} = results[0];
            //[STORING DATA IN SESSION]
            req.session.account_name = account_name;
            req.session.account_username = account_username;
            req.session.id = id;
            res.redirect('/dashboard');
        } else {
            res.redirect('/error');
        }
        });
    } catch (error) {
        console.error("Internal error on server", error);
        res.send("Internal Server error", error);
    }
}

//[CRUD] - [SIGNUP] 
exports.register = async (req, res) => {
    const { account_name, account_username, account_password} = req.body;
    const registerData = [account_name, account_username, account_password];
    try {
        await queryPromise('INSERT INTO tb_account SET account_name = ?, account_username = ?, account_password = ?', registerData);
        res.redirect('/');
    } catch (error) {
        console.error("Internal error on server", error);
        res.redirect('/error');
    }
}

//[CRUD] - [REGISTRATION OF STUDENT]
exports.registration_student = async (req, res) => {
    const {firstName, middleName, lastName, dob, gender, nationality, phone, email, address, guardianName, guardianContact, relationship, previousSchool, yearGraduation, academicAchievements, subjectsInterest} = req.body;
    const registrationData = [firstName, middleName, lastName, dob, gender, nationality, phone, email, address, guardianName, guardianContact, relationship, previousSchool, yearGraduation, academicAchievements, subjectsInterest];
    try {
        await queryPromise('INSERT INTO tb_student SET student_firstname = ?, student_middlename = ?, student_lastname = ?, student_birth = ?, student_gender = ?, student_nationality = ?, student_phone = ?, student_email = ?, student_address = ?, student_guardian = ?, student_guardian_contact = ?, student_guardian_relation = ?, student_previous_school = ?, student_year_graduate = ?, student_academics = ?, student_interest = ?', registrationData);
        res.render('registration', { successMessage: 'Student inserted successfully!', session: req.session });
    } catch (error) {
        console.error("Internal error on server", error);
        res.redirect('/error');
    }
}

