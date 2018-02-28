const express = require('express')
const path = require('path')
const parser = require('body-parser')
const mailer = require('nodemailer')

let app = express()

// App.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/views'));

app.use(parser.json())
app.use(parser.urlencoded({extended: false}))


app.get('/', (req, res)=> {
  res.render('index')
  console.log('hello world too');
})

var listener = app.listen(3000, function() {
    console.log('Listening on port ' + listener.address().port);
  });
