var Facebook = require('facebook-node-sdk')

exports.loginRequired = Facebook.loginRequired

exports.sayHello = function (req, res) {
    req.facebook.api('/me', function(err, user) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, ' + user.name + '!');
    })
}
