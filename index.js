const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 4000;
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


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

    const servicesCollection = client.db("car-doctor").collection('services')
    const bookingsCollection = client.db("car-doctor").collection('bookings')

    app.get("/services", async (req, res) => {
        const cursor = servicesCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get("/serviceDetais/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await servicesCollection.findOne(query);
      res.send(result)
    })

    app.post("/booking", async (req, res) => {
      const booking = req.body;
      const result = await bookingsCollection.insertOne(booking);
      res.send(result)
    })

    app.get('/bookings', async (req, res) => {
      const email = req.query.email
      const query = { email: email};
      const result = await bookingsCollection.find(query).toArray()
      res.send(result)
    })

    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingsCollection.deleteOne(query);
      res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(PORT, () => {
    console.log("server is running");
})