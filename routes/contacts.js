const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Contact = require("../model/Contact");
const User = require("../model/User");

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/contacts
// @desc    Add a new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact a user");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.post("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.post("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
