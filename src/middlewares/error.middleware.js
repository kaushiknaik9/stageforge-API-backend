const errormiddleware = (err, req, res, next) => {
  const statuscode = err.statusCode || 500;

  res.status(statuscode).json({
    success: false,
    message: err.message || "Server Error",
  });
};

module.exports = errormiddleware;
