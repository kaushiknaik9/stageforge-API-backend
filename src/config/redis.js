const { createClient } = require("redis");

const redisCache = createClient();

redisCache.on("error", (err) => {
  console.log("Redis Error: ", err);
});

redisCache.connect();

module.exports = redisCache;
