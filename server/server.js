require('dotenv').config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI || null;

if (!uri) {
  console.error("Error: MONGODB_URI environment variable is not set.");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    if (err.message && err.message.includes("Authentication failed")) {
      console.error("Error: Authentication failed. Please check your username and password.");
    } else if (err.message && err.message.includes("failed to connect")) {
      console.error("Error: Failed to connect to MongoDB. Please check your URI.");
    } else {
      console.error("Error:", err.message);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);