const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const getUserController = async (req, res) => {
  try {
    const user = await UserModel.findById({ _id: req.userId });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }
    user.password = undefined;
    return res
      .status(200)
      .send({ success: true, message: "User fetched successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    const user = await UserModel.findById({ _id: req.userId });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }
    const { userName, email, phone, address } = req.body;
    if (userName) user.userName = userName;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    await user.save();
    res
      .status(200)
      .send({ success: true, message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePasswordController = async (req, res) => {
  try {
    const user = await UserModel.findById({ _id: req.userId });
    console.log(user);
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res
        .status(400)
        .send({
          success: false,
          message: "Old password and new password are required",
        });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res
      .status(200)
      .send({ success: true, message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProfileController = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id );
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }
    return res
      .status(200)
      .send({ success: true, message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserController,
  updateUserController,
  updatePasswordController,
    deleteProfileController
};
