// import user from "../models/user";

const express = require("express");
const user = require("../models/user");
const getUser = async (req, res) => {
  try {
    let userData = await user.find();
    return res.status(200).json({
      userData,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

const createUser = async (req, res) => {
  try {
    let newUser = await user.insertOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      place: req.body.place,
      state: req.body.state,
      address: req.body.address,
    });
    return res.status(200).json({
      newUser,
    });
    console.log("user created");
  } catch (err) {
    console.log("ERROR", err);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const addUser = await user.findByIdAndUpdate(userId, {
      name: req.body.name,
      // email: req.body.email,
      // password: req.body.password,
      phone: req.body.phone,
      place: req.body.place,
      state: req.body.state,
      address: req.body.address,
    });
    return res.status(200).json({
      addUser,
    });
    console.log("user updated");
  } catch (err) {
    console.log("ERROR", err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteId = req.params.deleteId;
    let removeUser = await user.findByIdAndDelete(deleteId, {});
    return res.status(200).json({
      message: "User data removed ",
    });
    console.log("user deleted");
  } catch (err) {
    console.log("ERROR", err);
  }
};
module.exports = {deleteUser,updateUser,createUser,getUser};
