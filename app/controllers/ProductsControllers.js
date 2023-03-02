const express = require('express');
const router = express.Router();
const ProductsModel = require('../model/ProductsModel'); // import the User model

let products = [];

// ===Products===

class Product {
  constructor(id, prodName, prodDescription, category, price, prodQuantity, imgURL, userID) {
    this.id = id;
    this.prodName = prodName;
    this.prodDescription = prodDescription;
    this.category = category;
    this.price = price;
    this.prodQuantity = prodQuantity;
    this.imgURL = imgURL;
    this.userID = userID;
  }
}
// Create all Products
const createAllProducts = (req, res, next)=>{
    const { id, prodName, prodDescription, 
        category, price, 
        prodQuantity, imgURL, 
        userID} = req.body;
    const productObject = {id, prodName, prodDescription, 
        category, price, 
        prodQuantity, imgURL, 
        userID }; 
    products.push(productsObject);
    console.log(products); 
    res.status(201).json(products);
};

// Retrieve all Products
const getAllProducts = (req, res, next)=>{
    res.status(201).json({
        message: 'Retrieved ALL Products',
        products: products
      });
}

// Create single Product
const createProduct = (req, res, next)=>{
    const productObject = new Product({
        id: req.params.id, // use the ID from the URL parameter
        prodName: req.body.prodName,
        prodDescription: req.body.prodDescription,
        category: req.body.category,
        price: req.body.price,
        prodQuantity: req.body.prodQuantity,
        imgURL: req.body.imgURL,
        userID: req.body.userID
    });
    
    productObject // save the user to the database
        .then(result => {
            console.log(result); // log the result for debugging purposes
            res.status(201).json({
                message: 'Added a SINGLE Product',
                productObject: productObject
            });
        })
        .catch(err => {
            console.error(err); // log any errors that occur
            res.status(500).json({
                error: err
            });
        });
}

// Retrieve single Product by ID
const getProduct = (req, res, next)=>{
    const id = req.params.id;
    const products = products.find(product => product.id === id);
    if (!product) {
      return res.status(404).json({
        message: 'Product was not found'
      });
    }
    res.status(201).json({
      message: 'Product was not found',
      product: product
    });
}

// Update product by ID
const updateProduct = (req, res, next)=>{
  const id = req.params.id;
  const product = products.find(product => product.id === id);
  if (!product) {
      return res.status(404).json({
          message: 'Product was not found'
      });
  }
  // Checks if the authenticated user is the owner
  if (product.userID !== req.user.id) {
      return res.status(403).json({
          message: 'You are not authorized to update this product'
      });
  }

  const { prodName, prodDescription, category, price, prodQuantity, imgURL } = req.body;

  product.prodName = prodName || product.prodName;
  product.prodDescription = prodDescription || product.prodDescription;
  product.category = category || product.category;
  product.price = price || product.price;
  product.prodQuantity = prodQuantity || product.prodQuantity;
  product.imgURL = imgURL || product.imgURL;

  res.status(201).json({
      message: 'Product was updated successfully',
      product: product
  });
};


// Delete product by ID
const deleteProduct = (req, res, next)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id === id);
  //Checks if user exists
    if (productIndex === -1) {
      return res.status(404).json({
        message: 'Product was not found'
      });
    }
    products.splice(productIndex, 1);
    res.status(201).json({
      message: 'Product was deleted successfully'
    });
}

module.exports = {
        //===Products===
        createAllProducts,
        getAllProducts,
        createProduct,
        getProduct,
        updateProduct,
        deleteProduct
}