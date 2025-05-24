const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;


// Creates a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
    try {
        // Connects to the client to the server
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // This makes sure that the client will close when you are finished or have a error
        await client.close();
    }
}

run().catch(console.dir);