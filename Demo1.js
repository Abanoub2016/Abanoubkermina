var http = require('http')
http.createserver(function(req,res)
{
res.write("hello Word!");
res.end();



}).listen(8080);