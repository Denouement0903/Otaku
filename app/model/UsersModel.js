const database = require('../config/index');

// all users
const getUsers = (result) => {
    database.query("SELECT * FROM Users", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// single user
const getUserById = (id, result) => {
    database.query("SELECT * FROM Users WHERE id = ?", [userID], (err, results) => {             
        return;      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

const insertUser = (data, result) => {
    database.query("INSERT INTO Users SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const updateUserById = (data, userID, result) => {
    database.query("UPDATE Users SET firstName = ?, lastName = ?, gender = ?,  cellphoneNumber = ?,  emailAdd = ?, userPass = ?, userRole = ?, userProfile = ?, joinDate = ?,  WHERE userID = ?", 
    [data.firstName, data.lastName, data.gender, data.cellphoneNumber, data.emailAdd, data.userPass, data.userRole, data.userProfile, data.joinDate,
         userID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const deleteUserById = (userID, result) => {
    database.query("DELETE FROM Users WHERE userID = ?", [userID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}