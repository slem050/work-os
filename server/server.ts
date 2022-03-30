const express = require('express');
import path from 'path';
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
require('dotenv').config();
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../client/build"));







main().catch(err => console.log(err));

const db = mongoose.connection;

async function main() {
  const password=process.env.MONGO_PASSWORD;
  await mongoose.connect(`mongodb+srv://user1:${password}@cluster0.bqtvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

const routes = require('./routes/routes.js')(app, fs);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log('listening on port %s...', PORT);
});
const userRoute = require('./routes/userManage')
app.use('/users', userRoute);

const ProjectRoute = require('./routes/ProjectManage')
app.use('/project', ProjectRoute);