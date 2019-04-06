var expr=require('express');
var hbs=require('hbs');
const fs=require('fs');

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
	fs.appendFile('app.log',log +'\n');
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


/*app.get('/',(req,res)=>{
	//res.send('<h1>Hello! This is our First Express Page</h1>');
	var introduction={
		'Name':'Shrikant Sharma',
		'Hobbies':'Listening Music',
		'Strength':'Hard Working',
		'Weakness':'Over-Confidence',
		'Intreset':'Web Designning and Development'
	}
	//res.send(introduction);
	res.send("My Name is:"+introduction.Name+'</br>'+introduction.Hobbies+'</br>'+introduction.Strength
	+'</br>'+introduction.Weakness+'</br>'+introduction.Intreset);
});*/

app.get('/course',(req,res)=>{
//res.send('<h1>Open the Express Page1</h1>');
var course={
	'CAP919':'NodeJs',
	'CAP918':'Multiplatform Mobile App',
	'CAP906':'Python',
	'MGN330':'Social Entrepreneurship',
	'CAP907':'Information System',
	'CAP347':'Capstone Project'
	}
	res.send(course);
});

app.get('/grades',(req,res)=>{
	//res.send('<h1>Open the Express Page2</h1>');
	var grades={
	'Multiplatform Mobile App':'A+',
	'Python':'A+',
	'Social Entrepreneurship':'A',
	'Information System':'A',
	'Capstone Project':'O'
	}
	res.send(grades);
});

app.get('/marks',(req,res)=>{
	//res.send('<h1>Open the Express Page2</h1>');
	var marks={
	'Multiplatform Mobile App':'85',
	'Python':'87',
	'Social Entrepreneurship':'79',
	'Information System':'80',
	'Capstone Project':'95'
	}
	res.send(marks);
});

app.get('/attendance',(req,res)=>{
	//res.send('<h1>Open the Express Page2</h1>');
	var attendance={
	'Multiplatform Mobile App':'98%',
	'Python':'100%',
	'Social Entrepreneurship':'83%',
	'Information System':'91%',
	'Capstone Project':'100%'
	}
	res.send(attendance);
});
app.listen(5000,()=>{
	console.log('server is upto on port 5000!');
});