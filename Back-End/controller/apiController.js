const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

const User = require('../models/userModel');

var authUser = async function(req, res) {
     console.log("authUser");
     try {
          let user = await User.find({userName : req.params.username});
          if(user[0].password === req.params.password){
               res.json(user);
          } else {
               res.json(null);
          }
     } catch (err) {
          res.json({'message' : err})
     }
};
var getAllUser = async function(req, res) {
     console.log("getAllUser");
     try {
          const allUser = await User.find();
          res.send(allUser);
     } catch (err) {
          res.json({'message' : err})
     }
};
var getOneUser = async function(req, res) {
     console.log("getOneUser");
     try {
          let user = await User.findById(req.params.userId);
          res.json(user);
     } catch (err) {
          res.json({'message' : err})
     }
};
var createNewUser = async function(req, res) {
     console.log("createNewUser");
     try {
          const {firstName, lastName, userName, dateOfBirth, email, password} = req.body;
          let user = {};
          user.firstName = firstName;
          user.lastName = lastName;
          user.userName = userName;
          user.dateOfBirth = dateOfBirth;
          user.email = email;
          user.password = password
          let userModel = new User(user);
          await userModel.save();
          res.json(userModel);
     } catch (err) {
          res.json({'message' : err});
     }
};
var deleteUser = async function(req, res) {
     console.log("deleteUser");
     try {
          let user = await User.findByIdAndDelete(req.params.userId);
          res.json(user);
     } catch (err) {
          res.json({'message' : err})
     }
};
var updateUser = async function(req, res) {
     console.log("updateUser");
     try {
          let updatedUser = await User.updateOne({_id : req.params.userId}, {$set:{password:req.body.password}});
          res.json(updatedUser);
     } catch (err) {
          res.json({'message' : err})
     }
};

module.exports = {
     authUser,
     getAllUser,
     createNewUser,
     getOneUser,
     deleteUser,
     updateUser
}