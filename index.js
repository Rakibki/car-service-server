const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 4000;
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');


const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("DOctor Is running")
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);




app.listen(PORT, () => {
    console.log("server is running");
})