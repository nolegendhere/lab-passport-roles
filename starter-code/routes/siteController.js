/*jshint esversion: 6*/
const express = require("express");
const siteController = express.Router();

// User model
const User       = require("../models/user");

// Bcrypt to encrypt passwords
const bcrypt     = require("bcrypt");
const bcryptSalt = 10;

const passport = require("passport");

siteController.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = siteController;
