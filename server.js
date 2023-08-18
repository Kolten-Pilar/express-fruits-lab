const express = require('express');
const app = express();
const port = 3000;

const fruits = require('./models/fruits.js'); //import fruits
const veggies = require('./models/veggies.js'); //import veggies

//setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// routes
app.get('/', (req, res) => {
  res.send(`<h1>Hello</h1>`)
})

app.get('/fruits', (req, res)=>{
  res.render("Index", {
      fruits: fruits
  })
});

app.get('/veggies', (req, res) => {
  res.render("veggies/Index", {
    veggies: veggies
  })
}),

// show
app.get('/fruits/:index', (req, res) => {
  res.render('Show', { //second param must be an object
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