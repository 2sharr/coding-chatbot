// server.js
const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// Update the MongoDB connection string
const uri =
  "mongodb+srv://wwedipak46:2C2hqk6pE8sS_h2@mydb.qitihsx.mongodb.net/";
//mongodb+srv://wwedipak46:<password>@mydb.qitihsx.mongodb.net/
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/static", express.static(path.join(__dirname, "static")));

app.use(express.json());

app.post("/addData", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Chat_History");
    const coll = db.collection("chat");
    const { inputData } = req.body;
    const result = await coll.insertOne({ data: inputData });
    console.log("data is added");
    res.json({ insertedId: result.insertedId });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
});
app.post("/removeData", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Chat_History");
    const coll = db.collection("chat");
    const { inputData } = req.body;
    console.log(inputData.name);
    const query = { "data.name": inputData.name };
    const result = await coll.deleteOne(query);
    console.log("data is deleted");
    res.json("data is deleted successfully");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
});

app.post("/getData", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Chat_History");
    const coll = db.collection("chat");
    const data = await coll.find({}).toArray();
    // console.log(data);
    // console.log("data is fetched successfully");
    res.json(await data);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "login.html"));
});
app
  .get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "index.html"));
  })
  .get("/css/main", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "main.css"));
  })
  .get("/style.css", (req, res) => {
    res.sendFile(path.join(__filename, "style.css"));
  })
  .get("/script.js", (req, res) => {
    res.sendFile(path.join(__filename, "script.js"));
  });

app.get("/logout", (req, res) => {
  console.log("logout done");
  res.redirect("/login");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/login`);
});
