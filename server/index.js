// mongodb
const MongoClient = require('mongodb').MongoClient;
const dbName = "educationData"; // database name
const collection = "userInfo"; // collection name
const password = "mAHtt0Qp528xfulg"; // help me remember
const uri = `mongodb+srv://zach:${password}@userinfo-zqnes.gcp.mongodb.net/test?retryWrites=true&w=majority`;
// express
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app = express();


var db;
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if(err) return console.log(err)
  db = client.db(dbName);

  app.listen(3001, () => {
    console.log('listening on 3001');
  });

});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray();

  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

