const { Queue } = require("bullmq");

const emailQueue = new Queue("emailQue", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

module.exports = emailQueue;
