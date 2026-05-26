const ratelimiter = require("express-rate-limit");

const limiter = ratelimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many Requests",
});

module.exports = limiter;
