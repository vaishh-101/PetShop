const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const UserRoute = require('./Routes/UserRoute');
const ContactRouter = require('./Routes/ContactRoute')
const cors = require("cors");

const PORT = process.env.PORT || 5000 
async function connectToDB(){
    const connection = mongoose.connect(process.env.MONGO_URI)
    if(connection){
        console.log('connected to mongoDB');
    }
}
connectToDB();


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


app.listen(PORT, ()=>{
  console.log('Server starter running on port', PORT);
})