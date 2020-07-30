const express = require("express");
const router = express.Router();

// @route   POST api/contacts
// @desc    Get all users contacts
// @access  Private
router.post("/", (req, res) => {
  res.send("Get all contacts");
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
