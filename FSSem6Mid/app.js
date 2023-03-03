const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const app = express();
const port = 5000;


mongoose.connect('mongodb://127.0.0.1:27017/BlogDB')
.then(() => {console.log("Connection Established")})
.catch((err) => {console.log(err)});


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })

app.get('/', (req, res) => {
  Blog.find({})
  .then((data) => {
    res.render('index', {arr: data});
  })
  .catch((err) => console.log(arr));
});

app.post('/', (req, res) => {
  console.log(req.body);
  const curr=Date();
  const newItem = new Blog({
    title: req.body.title,
    desc: req.body.desc,
    mark: req.body.mark,
    date: curr
  });

  newItem.save()
  .then(() => console.log("Inserted"))
  .catch((err) => console.log(err));
  
  res.redirect('/');
});
