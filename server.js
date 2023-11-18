const express = require("express");
const connectDB = require("./MongoDB/mongoDB");
const routes = require("./Routes/Routes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

connectDB(); // Connect to MongoDB databaseF

require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Define routes for '/api' endpoint
app.use("/api", routes);

// Define a route for the root URL '/'
app.get("/", function (_request, response) {
  response.send('PassWord Reset Flow');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
