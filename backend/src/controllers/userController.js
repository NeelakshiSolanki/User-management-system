const User = require("../models/User");

// GET ALL USERS (ADMIN)
exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// ACTIVATE USER
exports.activateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "active" });
  res.json({ msg: "User activated" });
};

// DEACTIVATE USER
exports.deactivateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "inactive" });
  res.json({ msg: "User deactivated" });
};
