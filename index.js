const express=require('express');
const port=8000;
const path =require('path');
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
	return res.render('home', {title:'Bro I am NIsh',
		contact_list:contactList

});
});
app.get('/practice',function(req,res){
	return res.render('practice',{title:'practice bro practice'})
})
app.post('/contect-list',function(req,res){
	contactList.push({
		name:req.body.name,
		number:req.body.mobile
	});	
	return res.redirect('/');	
})
app.get('/delete-contect',function(req,res){
	const number=req.query.number;
	const numberIndex=contactList.findIndex(contact=> contact.number==number);
	if(numberIndex!=-1){
		contactList.splice(numberIndex,1);
	}
	return res.redirect('back');
})
app.listen(port,function(err){
	if(err){
		console.log("bro erro during running server");
	}
	console.log("running server port at: ",port);
});
// get post put patch delete