const database = require("../config/index");

// all users
const getProducts = (result) => {
    database.query("SELECT * FROM Products", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// single user
const getProductById = (id, result) => {
    database.query("SELECT * FROM Products WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

const insertProduct = (data, result) => {
    database.query("INSERT INTO Products SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const updateProductById = (data, id, result) => {
    database.query("UPDATE Products SET prodName = ?, prodDescription = ?, category = ?, price = ?, prodQuantity = ?, imgURL = ?, userID = ?, WHERE id = ?", [data.prodName, 
        data.prodDescription, data.category, data.price, data.prodQuantity, data.imgURL, data.userID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const deleteProductById = (id, result) => {
    database.query("DELETE FROM Products WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}