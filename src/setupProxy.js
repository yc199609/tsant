const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://localhost:8001/',
        changeOrigin:true,
        pathRewrite: {
            "^/api" : "/api"
        },
        logLevel: 'debug'
    }))
}