// Controller for handling run/session-related API endpoints (tracking user sessions, activity logs, etc.)

const express = require('express');
const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config();

const router = express.Router();

const uri = process.env.MONGO_URI || null;

if (!uri) {
  console.error("Error: MONGODB_URI environment variable is not set.");
  // Don't exit here, just prevent route from working
}

// GET /api/runs - fetch all runs from the 'runs' collection
router.get('/', async (req, res) => {
  if (!uri) {
    return res.status(500).json({ error: "MongoDB URI not set" });
  }
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    await client.connect();
    const db = client.db(); // uses default DB from URI
    const runs = await db.collection('runs').find({}).toArray();
    res.json(runs);
  } catch (err) {
    res.status(500).json({ error: err.message || "Failed to fetch runs" });
  } finally {
    await client.close();
  }
});

module.exports = router;