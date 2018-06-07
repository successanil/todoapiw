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

  // insert new record
  // db.collection('Todos').insertOne({
  //
  //   text:'Something to do',
  //   completed:false
  //
  // },(err,result) => {
  //
  //   if(err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  //
  // });

  // db.collection('Users').insertOne({
  //   name:'Anil',
  //   age : 35,
  //   location:'Dehradun'
  //
  // },(err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert user',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });


  db.close();
});
