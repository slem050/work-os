var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
require('dotenv').config();
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./client/build"))
main().catch(err => console.log(err));
const port = process.env.PORT || 3001;
//mongoose
main().catch((err) => console.log(err));
const db = mongoose.connection;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const password = process.env.MONGO_PASSWORD;
        yield mongoose.connect(`mongodb+srv://user1:${password}@cluster0.bqtvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    });
}
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("connected to DB!");
});
const routes = require('./routes/routes.js')(app, fs);
const server = app.listen(port, () => {
    console.log('listening on port %s...', port);
});
const userRoute = require('./routes/userManage.js');
app.use('/users', userRoute);
