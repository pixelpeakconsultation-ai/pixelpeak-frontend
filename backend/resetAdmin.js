const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const Admin = require("./models/Admin");

dotenv.config();

const resetAdmin = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env");
    }

    if (!process.env.ADMIN_USERNAME) {
      throw new Error("ADMIN_USERNAME is missing from .env");
    }

    if (!process.env.ADMIN_PASSWORD) {
      throw new Error("ADMIN_PASSWORD is missing from .env");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected.");

    const username = process.env.ADMIN_USERNAME.trim();
    const password = process.env.ADMIN_PASSWORD;

    const admin = await Admin.findOne({
      username,
    });

    if (!admin) {
      console.log(
        `Admin "${username}" was not found.`
      );

      console.log(
        "Run: node createAdmin.js"
      );

      await mongoose.connection.close();
      process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    admin.password = hashedPassword;

    await admin.save();

    console.log("================================");
    console.log("Admin password reset successfully.");
    console.log("Username:", username);
    console.log("================================");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(
      "Password reset error:",
      error.message
    );

    await mongoose.connection.close();
    process.exit(1);
  }
};

resetAdmin();