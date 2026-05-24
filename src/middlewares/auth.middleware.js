const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorisation;

    if (!authHeader) {
      return res.status(401).json({
        success: true,
        message: "No Token for Authorisation",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
  } catch (e) {
    res.status(401).json({
      success: false,
      message: "Invalid Token",
      data: e.message,
    });
  }
};

module.exports = protect;
