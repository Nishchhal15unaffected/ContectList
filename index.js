const express=require('express');
const port=8000;
const path =require('path');
const db=require('./config/mongoose.js');
const Contact=require('./models/contact.js');
const app=express();
app.use(express.urlencoded());
app.use(express.static('assets'));
// app.use(function(req,res,next){
// 	console.log("My middle");
// 	next();
// })
const contactList=[
	{
		name:'Nishchhal Prajapat',
		number:'1111111111'
	},
	{
		name:'Captain jack',
		number:'222222222'
	}
]
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',function(req,res){
	Contact.find({},function(err,contact){
		if(err){
			console.log(err);
		}
		return res.render('home',
	 {
	 	title:'Bro I am NIsh',
		contact_list:contact
	});
	})
	
});
app.get('/practice',function(req,res){
	return res.render('practice',{title:'practice bro practice'})
})
app.post('/contect-list',function(req,res){
	Contact2=new Contact({
		name:req.body.name,
		number:req.body.mobile
	})
	Contact2.save().then(()=>{
	console.log(Contact2);
}).catch((e)=>{
	console.log("Error",e);
})
		console.log(Contact);

	return res.redirect('back');
		
})
app.get('/delete-contect',function(req,res){
	let id=req.query.id;
	Contact.findByIdAndDelete(id,function(err){
		if(err){
			console.log("error in deleting");
			return;
		}
		return res.redirect('back');
	})
	// return res.redirect('back');
})
app.listen(port,function(err){
	if(err){
		console.log("bro erro during running server");
	}
	console.log("running server port at: ",port);
});
// get post put patch delete