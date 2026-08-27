const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

const router = express.Router();

/* ========================================
   ADMIN LOGIN
   POST /api/admin/login
======================================== */

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check required fields
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    // Find admin
    const admin = await Admin.findOne({
      username: username.trim(),
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    // Compare entered password with bcrypt hash
    const isPasswordCorrect = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    // Check JWT secret
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing from .env");

      return res.status(500).json({
        success: false,
        message: "Server configuration error.",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: admin._id.toString(),
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Send response
    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error during login.",
    });
  }
});

module.exports = router;