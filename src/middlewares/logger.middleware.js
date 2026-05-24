const loggermiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method} \nRequest URL: ${req.url}`);

  next();
};

module.exports = loggermiddleware;
