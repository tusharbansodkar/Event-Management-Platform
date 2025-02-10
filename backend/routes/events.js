const express = require("express");
const Event = require("../models/Events");

const router = express.Router();

//create event
router.post("/", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).jsnon({ message: err.message });
  }
});

module.exports = router;
