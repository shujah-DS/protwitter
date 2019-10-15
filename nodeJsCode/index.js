
const express = require('express')
const app = express()
const port = 3002
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'DfIWCHswudikACYWkWig',
    consumer_secret: 'ySrRV8rJdKWEhd7JedjJbKKWP5sJZtXY5F85gydcifE',
    access_token_key: '298379176-pvGn4ELjzhOqCrxt5NWXOTnoDcOE7rylSM37DYcN',
    access_token_secret: 's3YRNHx7G15EwH9KKHyyy41e13ifubnF1aeTcluUg'
  });
  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', function (req, res) {
    
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    var name = req.query.name
    var params = {screen_name: name};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            res.send(tweets);
        }
        res.send({message:error})
    });

  })
app.listen(port, () => console.log(`Server listening on port ${port}!`));

  