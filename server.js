// server.js
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors()); // Enable CORS
var port = 3001;
var connectDB = require("./DB");
connectDB();
app.get("/", function(req, res) {
    console.log("Message recieved");
    res.send("You sent a get req");
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/CreateRehome")); // Use CreateRehome.js route
app.use("/api", require("./Routes/CreatePetshelterform"));
app.listen(port, function() {
    console.log("Server is running on port ".concat(port));
});
