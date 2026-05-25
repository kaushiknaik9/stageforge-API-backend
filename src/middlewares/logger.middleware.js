const loggermiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method} \nRequest URL: ${req.url}`);
  console.log(req.query);

  next();
};

module.exports = loggermiddleware;
