const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const UsersModel = require('../model/UsersModel'); // import the User model

// ===Users===

let users = [];

// Create all Users
const createAllUsers = (req, res, next) => {
  const { firstName, lastName, gender, 
    cellphoneNumber, emailAdd, userPass, 
    userRole, userProfile, joinDate } = req.body;
  // hashing password with bcrypt
  bcrypt.hash(userPass, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      // create a new User object with the hashed password
      const user = new User({
        firstName,
        lastName,
        gender,
        cellphoneNumber,
        emailAdd,
        userPass: hashedPassword,
        userRole,
        userProfile,
        joinDate
      });
      // saving in DB
      user.save()
        .then(result => {
          // Generate a JWT token with the user ID and email address as payload
          const token = jwt.sign(
            { userID: user._id, email: user.emailAdd },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
          );

          // Send to frontend
          res.status(200).json({
            message: 'User was created successfully',
            token: token
          });
        })
        .catch(err => {
          res.status(500).json({ error: err });
        });
    }
  });
};

// Retrieve all users
const getAllUsers = (req, res, next) => {
    res.status(200).json({
      message: 'Retrieved ALL Users',
      users: users
    });
  }

//Create a new user
const createUser = (req, res, next) => {
    const userObject = new User({
        userID: req.params.userID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        cellphoneNumber: req.body.cellphoneNumber,
        emailAdd: req.body.email,
        userPass: req.body.userPass,
    });

    userObject // save to DB
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Added a SINGLE User',
                userObject: userObject
            });
        })
        .catch(err => {
            console.error(err); 
            res.status(500).json({
                error: err
            });
        });
        // Login
        const emailAdd = req.body.emailAdd;
        const userPass = req.body.userPass;
      
        // Find user by email
        User.findOne({ emailAdd })
          .then(user => {
            if (!user) {
              return res.status(401).json({ message: 'Authentication has failed.' });
            }
            // Compare passwords
            bcrypt.compare(userPass, user.userPass, (err, result) => {
              if (err) {
                return res.status(401).json({ message: 'Authentication has failed.' });
              }
              if (result) {
                const token = jwt.sign(
                  {
                    emailAdd: user.emailAdd,
                    userID: user._id
                  },
                  'SECRET_KEY',
                  {
                    expiresIn: '1h'
                  }
                );
                return res.status(200).json({ message: 'Authentication was successful.', token });
              }
              return res.status(401).json({ message: 'Authentication has failed.' });
            });
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({ error: err });
          });
};


//Retrieve single User by ID
const getUser = (req, res, next)=>{
    const userID = req.params.userID;
    const user = users.find(user => user.userID === userID);
    if (!user) {
      return res.status(404).json({
        message: 'User was not found'
      });
    }
    res.status(200).json({
      message: 'User was not found',
      user: user
    });
};

// Update user by ID
const updateUser = (req, res, next) => {
const userID = req.params.userID;
  User.findById(userID)
    .exec()
    .then(user => {
      if (!user) {
        return res.status(404).json({
          message: 'User was not found'
        });
      }

      const { firstName, lastName, gender, 
        cellphoneNumber, emailAdd, userPass, 
        userRole, userProfile, joinDate } = req.body;
      if (userPass) {
        bcrypt.hash(userPass, 10, (err, hashedPassword) => {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            // Update with new hashed password
            user.firstName = firstName || user.firstName;
            user.lastName = lastName || user.lastName;
            user.gender = gender || user.gender;
            user.cellphoneNumber = cellphoneNumber || user.cellphoneNumber;
            user.emailAdd = emailAdd || user.emailAdd;
            user.userPass = hashedPassword;
            user.userRole = userRole || user.userRole;
            user.userProfile = userProfile || user.userProfile;
            user.joinDate = joinDate || user.joinDate;

            user.save()
              .then(updatedUser => {
                res.status(200).json({
                  message: 'User updated successfully',
                  user: updatedUser
                });
              })
              .catch(err => {
                res.status(500).json({ error: err });
              });
          }
        });
      } else {
        // Update with new values
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.gender = gender || user.gender;
        user.cellphoneNumber = cellphoneNumber || user.cellphoneNumber;
        user.emailAdd = emailAdd || user.emailAdd;
        user.userRole = userRole || user.userRole;
        user.userProfile = userProfile || user.userProfile;
        user.joinDate = joinDate || user.joinDate;

        user.save()
          .then(updatedUser => {
            res.status(200).json({
              message: 'User updated successfully',
              user: updatedUser
            });
          })
          .catch(err => {
            res.status(500).json({ error: err });
          });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

// Delete user by ID
const deleteUser = (req, res, next)=>{
  const userIS = req.params.userID;
  const userIndex = users.findIndex(user => user.userID === userID);
//Checks if user exists
  if (userIndex === -1) {
    return res.status(404).json({
      message: 'User was not found'
    });
  }
  users.splice(userIndex, 1);
  res.status(200).json({
    message: 'User was deleted successfully'
  });
};

  module.exports = {
    // ===Users===
    createAllUsers,
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
  };
  