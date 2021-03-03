<<<<<<< HEAD
const express = require('express')
const app = express()
const postgres = require('./postgres')

app.use(express.json())
app.use(express.static('public'))

const peopleController = require('./controllers/people')
app.use('/people', peopleController)

postgres.connect()

app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
})
=======
const express = require("express");
const app = express();
const postgres = require("./postgres");

app.use(express.json());
app.use(express.static("public"));

const peopleController = require("./controllers/people.js");
app.use("/people", peopleController);

postgres.connect();

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});



>>>>>>> ae09d09ec1f5775b97a180b783faa5a8b8512e90
