//include mongoose
const mongoose= require("mongoose");
//connect to the database 
mongoose.connect('mongodb://localhost/contect_list_db');
//acquire the connection (to check if it is successfully)
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running then print 
db.once('open',function(){
	console.log('Successfully connected');
});