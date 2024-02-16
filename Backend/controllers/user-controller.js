const express = require("express");
const user = require("../models/user");
const userCltr = {};

userCltr.getUser = async (req, res) => {
  try {
    let userData = await user.find();
    console.log(userData);
    return res.status(200).json({
      userData,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};
userCltr.getSingleUser = async (req, res) => {
  try {
    const usetId = await user.find( {email:req.body.email} );
    if (!usetId) {
      console.log("user not found");
      return res.status(404).json({ message: "No User Found" });
    } else {
      console.log("user found");
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
userCltr.createUser = async (req, res) => {
  try {
    let newUser = await user.create(
      req.body
      // email: req.body.email,
      // password: req.body.password,
      // phone: req.body.phone,
      // place: req.body.place,
      // state: req.body.state,
      // address: req.body.address,
    );
    await newUser.save();
    console.log("user created");
    return res.status(200).json(newUser);
  } catch (err) {
    console.log("ERROR", err);
  }
};

userCltr.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const addUser = await user.findByIdAndUpdate(
      userId,
      req.body
      // name: req.body.name,
      // // email: req.body.email,
      // // password: req.body.password,
      // phone: req.body.phone,
      // place: req.body.place,
      // state: req.body.state,
      // address: req.body.address,
    );
    await addUser.save();
    console.log("user updated");
    return res.status(200).json({
      addUser,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

userCltr.deleteUser = async (req, res) => {
  try {
    const deleteId = req.params.id;
    let removeUser = await user.findByIdAndDelete(deleteId, {});
    console.log("user deleted");
    // await removeUser.save();
    return res.status(200).json({
      message: "User data removed ",
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = userCltr;
//this way or writing your controllers would be better and efficient
// do not user module.exports multiple only last exports will be exported the rest wont so export the way it is commented
