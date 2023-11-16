const express = require("express");
const connectDB = require("./MongoDB/mongoDB");
const routes = require("./Routes/Routes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

require("dotenv").config();

const PORT = process.env.PORT || 6000;

app.use("/api", routes);

app.get("/", function (_request, response) {
  response.send('PassWord Reset Flow');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
