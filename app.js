//changed server to app.js in package.json
//part1 point1
const express = require('express'); 
const app = new express(); 
const bodyParser = require('body-parser'); //part 1 point 2
const path = require ('path'); 
const cors = require('cors');//part2 point 7

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');//part1 point3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 
app.use(cors()); //part1 point2

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 

app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index', {});
    
});
app.listen(process.env.PORT || 5000,()=>{

    console.log("Server Ready on 5000");/*changed part1 point5*/
});