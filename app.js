var expr=require('express');
var hbs=require('hbs');
const fs=require('fs');
const port=process.env.PORT || 3000;

var app=expr();
hbs.registerPartials(__dirname+'/views/Partial')
app.set('View String','hbs');
app.use(expr.static(__dirname+'/public'));
//app.use(expr.static(__dirname+'/pvt'));

app.use((req,res,next)=>{
	var now =new Date().toString();
	//var log=`${now}:${req.ip}`;
   var log=`${now}: ${req.method} ${req.url} ${req.path} ${req.protocol} ${req.host} ${req.ip}`;
	console.log(log);
	next();
})

hbs.registerHelper('getCurrentYear',() =>{
	return new Date().getFullYear()
});
hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});

app.get('/',(req,res)=>{
res.render('home.hbs',{
	pageTitle:'Home Page',
	welcomeMessage:'Welcome to my website',
	currentYear:new Date().getFullYear()
     });
});

app.get('/about',(req,res)=>{
res.render('about.hbs',{
	pageTitle:'About Page',
	currentYear:new Date().getFullYear()
     });
});
app.get('/cont',(req,res)=>{
	res.render('cont.hbs',{
		pageTitle:'Contact Page',
		currentYear:new Date().getFullYear()
		 });
	});
app.listen(port,()=>{
	console.log(`server is upto on port ${port}`);
});