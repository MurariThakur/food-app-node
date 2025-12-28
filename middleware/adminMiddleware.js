const userModel = require("../models/userModel.js");

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.userId);
    if (user.userType !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in admin middleware",
      error,
    });
  }
};

module.exports = adminMiddleware;
