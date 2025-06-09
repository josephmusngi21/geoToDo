require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI || null;

if (!uri) {
  console.error("Error: MONGO_URI environment variable is not set.");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/runs', async (req, res) => {
  try {
    await client.connect();
    const runs = await client.db("todo").collection("todo_list").find({}).toArray();
    res.json(runs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});