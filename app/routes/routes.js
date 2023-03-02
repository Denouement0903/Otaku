const express = require('express');
const router = express.Router();
const {createToken, verifyAToken} = require('../middleware/AuthenticatedUser')
const UserModel = require('../model/UsersModel');
const ProductModel = require('../model/ProductsModel')
const UsersControllers = require('../controllers/UsersControllers');
const ProductsControllers = require('../controllers/ProductsControllers');

// ===USERS===

// Create All users/registration
router.post('/users', createToken, UsersControllers.createAllUsers);
// Retrieve All Users
router.get('/users', verifyAToken, UsersControllers.getAllUsers);
// Create single user/login
router.post('/users/userID', createToken, UsersControllers.createUser);
// Get User by ID
router.get('/users/:userID', verifyAToken, UsersControllers.getUser);
// Update User by ID
router.put('/users/:userID', createToken, UsersControllers.updateUser)
//Delete User by ID
router.delete('/users/:userID', verifyAToken, UsersControllers.deleteUser)

// ===Products===

// ADD ALL Products
router.post('/products', ProductsControllers.createAllProducts);
// Retrieve ALL Products
router.get('/products', ProductsControllers.getAllProducts);
// ADD SINGLE Product
router.post('/products/:productID', ProductsControllers.createProduct);
// Retrieve a single product by ID
router.get('/products/:productID', ProductsControllers.getProduct);
// Update Product by ID
router.put('/products/:productID', ProductsControllers.updateProduct)
// Delete Product by ID
router.delete('/products/:productID', ProductsControllers.deleteProduct)

module.exports = router;