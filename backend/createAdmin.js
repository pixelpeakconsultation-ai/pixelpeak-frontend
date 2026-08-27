const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const Admin = require("./models/Admin");

dotenv.config();

const createAdmin = async () => {
  try {
    // Check environment variables
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env");
    }

    if (!process.env.ADMIN_USERNAME) {
      throw new Error("ADMIN_USERNAME is missing from .env");
    }

    if (!process.env.ADMIN_PASSWORD) {
      throw new Error("ADMIN_PASSWORD is missing from .env");
    }

    // Connect MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected.");

    const username = process.env.ADMIN_USERNAME.trim();
    const password = process.env.ADMIN_PASSWORD;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      username,
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      console.log("Username:", username);

      await mongoose.connection.close();
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    // Create admin
    await Admin.create({
      username,
      password: hashedPassword,
    });

    console.log("================================");
    console.log("Admin created successfully.");
    console.log("Username:", username);
    console.log("================================");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(
      "Admin creation error:",
      error.message
    );

    await mongoose.connection.close();
    process.exit(1);
  }
};

createAdmin();