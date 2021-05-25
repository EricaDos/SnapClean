import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';



//Routers Imported
import jobRoutes from './routes/job.js';

//Initialising the express app
const app = express();
app.use(bodyParser.json({
  limit: "20mb",
  extended: true, //Ensures everything goes through body parser
}));
app.use(bodyParser.urlencoded({
  limit: "20mb",
  extended: true, //Ensures everything goes through body parser
}));

//Anything within jobs router will contain /jobs/ within url
app.use(cors());

app.use('/jobs', jobRoutes);


app.get("/", (req, res) => res.status(200).send("Working SC DB"))


//connecting to database
const CONNECTION_URL = "mongodb+srv://admin:yiSmVOUrUsVH1sjS@snapcleancluster.tdiko.mongodb.net/scdb?retryWrites=true&w=majority"

const port = process.env.PORT || 5000;
//Listener


app.listen(port, () => console.log(`listening on localhost :${port}`));
//Returns promise and avoids errors - mongoose connection to our db

try {
mongoose.connect( CONNECTION_URL, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true}, () =>
  console.log(`Connection Established SC Port: ${port}`))
}catch (error) {
  console.log("Could not connect");
}


//Avoid console errors

// mongoose.set('useFindAndModify',false);
