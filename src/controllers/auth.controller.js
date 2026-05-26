const AppError = require("../utils/AppError");
const asynchandler = require("../utils/asyncHandler");

const emailQueue = require("../queues/email.queue");

const Users = require("../models/user.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registeruser = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await Users.findOne({ email });

  if (existingUser) {
    throw new AppError("User Email-Id already exists Try logging in !!", 400);
  }

  const salt = await bcrypt.genSalt(10);

  const hashedpassword = await bcrypt.hash(password, salt);

  const user = await Users.create({
    name,
    email,
    password: hashedpassword,
  });

  await emailQueue.add("sendWelcomeEmail", {
    email: user.email,
  });

  res.status(201).json({
    success: true,
    message: "User Created Success !!",
  });
});

const loginuser = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const existinguser = await Users.findOne({ email });
  if (!existinguser) {
    throw new AppError("Email Id doesnt exists trying Signing In !!", 400);
  }

  const isMatching = await bcrypt.compare(password, existinguser.password);

  if (!isMatching) {
    throw new AppError("Incorrect Password", 400);
  }

  const token = jwt.sign(
    {
      id: existinguser._id,
      role: existinguser.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
  res.status(200).json({
    success: true,
    token,
  });
});

module.exports = { registeruser, loginuser };
