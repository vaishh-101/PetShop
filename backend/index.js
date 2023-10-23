const express = require('express');
const app = express();
const UserRoute = require('./Routes/UserRoute');
const ContactRouter = require('./Routes/ContactRoute')
const sequelize = require("./models/db");
const cors = require("cors");


const options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(options));

app.use(express.json());


app.use('/api', UserRoute);
app.use('/contact', ContactRouter)

app.get("/", function(req, res) {
  res.send("Hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
