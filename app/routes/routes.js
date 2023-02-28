const express = require('express');
const router = express.Router();

// Get Home Page
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Home Page'
    },
   )
});
// Add All Users
router.post('/users', (req, res, next) => {
    res.status(200).json({
        message: 'Added ALL Users'
    })
});
// Retrieve All Users
router.get('/users', (req, res, next) => {
    res.status(200).json({
        message: 'Retrieved ALL Users'
    })
});
// Add One User
router.post('/users/:userID', (req, res, next) => {
    res.status(200).json({
        message: 'Added a SINGLE User'
    })
});
// Get User by ID
router.get('/users/:userID', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'A new user ID was retrieved'
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
        message: 'Product has been retrieved'
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