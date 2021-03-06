var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-One' : {
     title: 'Article One/Aditya',
    heading: 'Article One',
    date: 'Sept 30, 2016',
    content: ` <p>
                This is article one.This is article one.This is article one.This is article one.
                This is article one.This is article one.This is article one.
            </p>
            <p>
                This is article one.This is article one.This is article one.This is article one.
                This is article one.This is article one.This is article one.
            </p>
             <p>
                This is article one.This is article one.This is article one.This is article one.
                This is article one.This is article one.This is article one.
            </p>`
                 },
    'article-Two' : { 
    title: 'Article Two/Aditya',
    heading: 'Article Two',
    date: 'Sept 15, 2016',
    content: ` <p>
                This is article Two.
            </p>`
             },
    'article-Three' :{
    title: 'Article Three/Aditya',
    heading: 'Article Three',
    date: 'Sept 10, 2016',
    content: ` <p>
            This is article Three.
            </p>`
               }             
};

function createTemplate (data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate =
`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
         <hr/>
        <div class = "footer">
                <input type = "text" id = "name" placeholder = "Write a comment.."></input>   
                <input type = "submit" value = "Submit" id="submit_btn"></input>   
                <ul id = "namelist"></ul>
                </div>
        </div>
         <script type="text/javascript" src="/ui/main1.js">
        </script>
    </body>
</html>` ;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index6.html'));
});


app.get('/app1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter +1;
    res.send(counter.toString());
});



var names = [];
app.get('/submit-name',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});

var names1 = [];
app.get('/submitname',function(req,res){
    var name = req.query.name;
    names1.push(name);
    res.send(JSON.stringify(names1));
    
});

app.get('/articleone', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/main1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main1.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
