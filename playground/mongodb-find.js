// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);

var user = {name:'anil',age:35};


// object destructuring
var {name} = user;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected');

  // db.collection('Todos').find({
  //   _id:new ObjectID('5b18f07ba4031522efc982d8')
  // }).toArray().then((docs) => {
  //
  //    console.log(JSON.stringify(docs),undefined,4);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos',err)
  // });


  db.collection('Todos').find({
    completed: false
  }).count().then((count) => {

     console.log(JSON.stringify(count),undefined,4);

  }, (err) => {
    console.log('Unable to fetch todos',err)
  });


  db.close();
});
