const express = require('express');
const app = express();
const port = 3000;

const fruits = require('./models/fruits.js'); //import fruits
const veggies = require('./models/veggies.js'); //import veggies

//setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Middleware - function to excecute for all routes
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})
//this allows the body of the POST request - REQUIRED FOR POST REQUEST
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) => {
  res.send(`<h1>Hello</h1>
  <a href="/veggies">Veggies!</a> <br />
  <a href="/fruits">Fruits!</a>
  `)
})

app.get('/fruits', (req, res)=>{
  res.render("fruits/Index", {
      fruits: fruits
  })
});

app.get('/veggies', (req, res) => {
  res.render("veggies/Index", {
    veggies: veggies
  })
}),

//New veggies
app.get('/veggies/new', (req, res) => {
  res.render('veggies/New');
})

//Create = POST
app.post('/veggies', (req, res) => {
  console.log(req.body);
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; // do some data correction
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  veggies.push(req.body);
  res.send('data received');
  res.redirect('/veggies');

})

//New fruit
app.get('/fruits/new', (req, res) => {
  res.render('fruits/New');
})

//Create = POST
app.post('/fruits', (req, res) => {
  console.log(req.body);
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; // do some data correction
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits');
  res.send('data received');
})

// show
app.get('/fruits/:index', (req, res) => {
  res.render('fruits/Show', { //second param must be an object
    fruit: fruits[req.params.index] 
    // there will be a variable available inside the jsx file called fruit,
    // its value is fruits[req.params.index]
  })
})

app.get('/veggies/:index', (req, res) => {
  res.render('veggies/Show', {
    veggie: veggies[req.params.index]
  })
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})