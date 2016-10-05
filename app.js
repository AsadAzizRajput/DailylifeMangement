var express = require('express');
var path = require('path');
var staticPath = path.resolve(__dirname, "static");

var app = express();
app.use(express.static(staticPath));
app.set('port',(process.env.PORT||3000));


// app.get('/',function(req,res)
// {
// res.send("Hello WOrld")
// })



app.get("*", function (req, res) {
    var indexViewPath = path.resolve(__dirname ,"./static/adminPortal/index.html");
    res.sendFile(indexViewPath);
}); 

app.listen(app.get('port'), function () {
    console.log("Server is on port ", app.get('port'));
});
