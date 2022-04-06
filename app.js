const express = require('express')
const app = express()
const path = require('path');
const router = express.Router()
const port = 3000
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kaisankyachan:theM00nislistening@cluster0.oxcb0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(express.static('public'))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //dirname : It will resolve to your project folder.
});

router.get('/notes',function(req,res){
  res.sendFile(path.join(__dirname+'/public/notes.html'));
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.use('/', router)

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})