const { Worker } = require("bullmq");

const worker = new Worker(
  "emailQueue",
  async (job) => {
    console.log(`Sending emails to ${job.data.email}`);
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6279,
    },
  },
);
