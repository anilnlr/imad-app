var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   'article-one' : {
title: 'Article-one | Anil',
heading: 'Article One',
date: 'Sep 5, 2016',
content: `<p>
                This is contnt for my first article. This is contnt for my first article. This is contnt for my first article.
                This is contnt for my first article. This is contnt for my first article. This is contnt for my first article.
            </p>
            <p>
                This is contnt for my first article. This is contnt for my first article. This is contnt for my first article.
                This is contnt for my first article. This is contnt for my first article. This is contnt for my first article.
            </p>
            <p>
                This is contnt for my first article. This is contnt for my first article. This is contnt for my first article.
                This is contnt for my first article. This is contnt for my first article. This is contnt for my first article.
            </p>`
},
   'article-two' : {
       title: 'Article-Two | Anil',
heading: 'Article Two',
date: 'Sep 10, 2016',
content: `<p>
                This is contnt for my second article. 
            </p>`
   },
   'article-three' : {
       title: 'Article-Three | Anil',
        heading: 'Article Three',
        date: 'Sep 15, 2016',
        content: `<p>
                This is contnt for my third article. 
            </p>`
   }
};


function CreateTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
        </div>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//app.get('/article-one', function (req, res) {
 // res.send(CreateTemplate(articleOne));
//});

//app.get('/article-two', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//});

//app.get('/article-three', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
//});

//var counter = 0;
app.get('/counter', function (req, res) {
    var counter = counter + 1;
  res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) { //URL: //submit-name?name-xxxx
  var name = req.query.name;
  names.push(name);
  //convert Javascript object to string using JSON
  res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    //articleName = article-one
    //article[articleName] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(CreateTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
