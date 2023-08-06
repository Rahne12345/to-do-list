const mongoose = require('mongoose');

// connecting to local host
mongoose.connect('mongodb://localhost/todo_list_db');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Successfully Connected to DB");
});