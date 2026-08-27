const express = require("express");
const Contact = require("../models/Contact");
const protect = require("../middleware/protect");

const router = express.Router();

// ========================================
// SUBMIT CONTACT FORM - PUBLIC
// POST /api/contact
// ========================================
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      message,
    } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const newContact = new Contact({
      name,
      email,
      company,
      phone,
      service,
      budget,
      message,
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully.",
      contact: savedContact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// ========================================
// GET ALL CONTACTS - ADMIN
// GET /api/contact
// ========================================
router.get("/", protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error("Get contacts error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact submissions.",
    });
  }
});

// ========================================
// GET SINGLE CONTACT - ADMIN
// GET /api/contact/:id
// ========================================
router.get("/:id", protect, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact submission not found.",
      });
    }

    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    console.error("Get contact error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact submission.",
    });
  }
});

// ========================================
// DELETE CONTACT - ADMIN
// DELETE /api/contact/:id
// ========================================
router.delete("/:id", protect, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact submission not found.",
      });
    }

    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Contact submission deleted successfully.",
    });
  } catch (error) {
    console.error("Delete contact error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete contact submission.",
    });
  }
});

module.exports = router;