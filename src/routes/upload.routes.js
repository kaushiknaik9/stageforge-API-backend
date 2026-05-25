const upload = require("../middlewares/upload.middleware");
const express = require("express");

const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json({
    success: true,
    data: req.file,
  });
});

module.exports = router;
