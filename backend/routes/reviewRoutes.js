const express = require("express");
const Review = require("../models/Review");
const protect = require("../middleware/protect");

const router = express.Router();

// ========================================
// GET APPROVED REVIEWS - PUBLIC
// GET /api/reviews
// ========================================

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error("Get approved reviews error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews.",
    });
  }
});

// ========================================
// SUBMIT REVIEW - PUBLIC
// POST /api/reviews
// ========================================

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      rating,
      comment,
      company,
      service,
    } = req.body;

    if (!name || !email || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, rating and comment are required.",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5.",
      });
    }

    const review = new Review({
      name,
      email,
      rating,
      comment,
      company,
      service,
      approved: false,
    });

    await review.save();

    res.status(201).json({
      success: true,
      message:
        "Thank you for your review! It will appear after approval.",
      review,
    });
  } catch (error) {
    console.error("Submit review error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit review.",
    });
  }
});

// ========================================
// GET ALL REVIEWS - ADMIN
// GET /api/reviews/admin
// ========================================

router.get("/admin", protect, async (req, res) => {
  try {
    const reviews = await Review.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error("Admin get reviews error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews.",
    });
  }
});

// ========================================
// APPROVE REVIEW - ADMIN
// PATCH /api/reviews/:id/approve
// ========================================

router.patch("/:id/approve", protect, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    review.approved = true;

    await review.save();

    res.status(200).json({
      success: true,
      message: "Review approved successfully.",
      review,
    });
  } catch (error) {
    console.error("Approve review error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to approve review.",
    });
  }
});

// ========================================
// DELETE REVIEW - ADMIN
// DELETE /api/reviews/:id
// ========================================

router.delete("/:id", protect, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully.",
    });
  } catch (error) {
    console.error("Delete review error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete review.",
    });
  }
});

module.exports = router;