const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../model/UsersModel'); // import the User model
const fs = require('fs');

let users = []; 

// Get Home Page
router.post('/users', (req, res, next) => {
    const { userID, firstName, lastName, 
        gender, cellphoneNumber, 
        emailAdd, userPass, 
        userRole, userProfile, joinDate } = req.body;
    const userObject = { userID, firstName, lastName, 
        gender, cellphoneNumber, 
        emailAdd, userPass, 
        userRole, userProfile, joinDate }; 
    users.push(userObject);
    console.log(users); 
    res.status(200).json(users);
});
// Retrieve All Users
router.get('/users', (req, res, next) => {
    res.status(200).json({
        message: 'Retrieved ALL Users',
        users: users
    })
});


router.post('/users/:userID', (req, res, next) => {
    const userObject = new User({
        userID: req.params.userID, // use the ID from the URL parameter
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        cellphoneNumber: req.body.cellphoneNumber,
        emailAdd: req.body.email,
        userPass: req.body.userPass,
    });

    userObject.save() // save the user to the database
        .then(result => {
            console.log(result); // log the result for debugging purposes
            res.status(200).json({
                message: 'Added a SINGLE User',
                userObject: userObject
            });
        })
        .catch(err => {
            console.error(err); // log any errors that occur
            res.status(500).json({
                error: err
            });
        });
});

// Get User by ID
router.get('/users/:userID', (req, res, next) => {
    const userID = req.params.userID;
    res.status(200).json({
        message: 'A new user ID was retrieved',
        userID: userID
    })
});
// Update User by ID
router.put('/users/:userID', (req, res, next) =>{
    res.status(200).json({
        message: 'User updated'
    })
})
//Delete User by ID
router.delete('/users/:userID', (req, res, next) =>{
    res.status(200).json({
        message: 'User deleted'
    })
})

// ADD ALL Products
router.post('/products', (req, res, next) => {
    res.status(201).json({
        message: 'Added ALL Products'
    })
});
// Retrieve ALL Products
router.get('/products', (req, res, next) => {
    res.status(201).json({
        message: 'Added ALL Products'
    })
});
// ADD SINGLE Product
router.post('/products/:productID', (req, res, next) => {
    res.status(201).json({
        message: 'Added Product Successfully'
    })
});
// Retrieve a single product by ID
router.get('/products/:productID', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Product has been retrieved',
        productID: id
    })
});

// Update Product by ID
router.patch('/products/:productID', (req, res, next) =>{
    res.status(200).json({
        message: 'Product updated'
    })
})
// Delete Product by ID
router.delete('/products/:productID', (req, res, next) =>{
    res.status(200).json({
        message: 'Product deleted'
    })
})

module.exports = router;