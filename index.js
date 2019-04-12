var http = require('http')

http.createServer (function (req, res) {
    if (req.url=='/hello'){
        res.writeHeader(200, {'Content-Type': 'text/plain'})
        if(req.method=='GET')
            res.write('world')
        if(req.method=='POST')
            res.write('world created')
        if(req.method=='PUT')
            res.write('world updated')
        if(req.method=='DELETE')
            res.write('world deleted')
        res.end()
    }
}).listen(8000, 'localhost', function (err) {
    if (!err) console.log('Server is running on port 8000')
    else console.log(err)
})