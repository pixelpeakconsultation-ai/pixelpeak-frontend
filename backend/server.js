const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

const app = express();

// ========================================
// MIDDLEWARE
// ========================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      // Add your production frontend URL here later
    ],
    credentials: true,
  })
);

app.use(express.json());

// ========================================
// ROUTES
// ========================================

app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);

// ========================================
// TEST ROUTE
// ========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "PixelPeak API is running",
  });
});

// ========================================
// MONGODB
// ========================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error(
      "MongoDB connection error:",
      error.message
    );
  });

// ========================================
// SERVER
// ========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});