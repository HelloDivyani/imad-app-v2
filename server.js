var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':
    {
         title:'Article One | Divyani Mittal',
  date:'11 Feb 2017',
  heading:'Article One',
  content:`<p>This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  
</p>
<p>This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  
</p>
<p>This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  
This is the content of Article One |  This is the content of Article One |  
</p>`
  
    
},
'article-two':
{
     title:'Article Two | Divyani Mittal',
  date:'11 Feb 2017',
  heading:'Article Two',
  content:`<p>This is the content of Article TwO</p>`
  
    
},
'article-three':
{
     title:'Article Three | Divyani Mittal',
  date:'11 Feb 2017',
  heading:'Article Three',
  content:`<p>This is the content of Article Three
</p>`
  
}

        
    };

 



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



app.get('/:articleName', function (req, res) {
    // feature of express framework : match
    
  res.send(CreateTemplate(articles[articleName]));
});





function CreateTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
<head>
<title>
${title};
</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link href="/ui/style.css" rel="stylesheet" />


</head>



<body>
    <div class = "container">
<div>
<a href="/">Home Page</a>

</div>
<hr>
<div>
<h3>${heading};</h3>
</div>
<div>
   ${date};
</div>
<div>
${content};
</div>
</div>
</body>
</html>
`
        
        
    ;
   
   
   return htmlTemplate; 
}



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
