// express app
const express = require("express");
const app = express();
// cors
const cors = require("cors");
// jwt
const jwt = require("jsonwebtoken");
// dotenv
require("dotenv").config();
// port
const port = process.env.PORT || 5000;
// mongodb
const { MongoClient, ServerApiVersion } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());

// mongodb uri, client and functions

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_CLUSTER_URI}`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
    try {

        // database and collections 
        // database 
        const EventVerseDB=client.db('EventVerse-DB');
        // collections 
        const allEvents=EventVerseDB.collections('All-Events');



      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
     }
  }
  run().catch(console.dir);

// server run test
app.get("/", async (req, res) => {
  res.send("EventVerse Server Functional");
});

// server listen test
app.listen(port, async () => {
  console.log(`Listening EventVerse Server at port:${port}`);
});
