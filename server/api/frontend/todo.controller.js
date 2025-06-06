// Controller for frontend to-do API endpoints (fetching tasks for UI, updating task status from frontend, etc.)

const express = require('express');
const router = express.Router();

// Example: Get all todos for frontend
router.get('/', (req, res) => {
  res.json({ message: "Get all todos - not implemented" });
});

module.exports = router;
