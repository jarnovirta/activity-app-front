const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  if (process.env.NODE_ENV !== 'production') {
    app.use(proxy('/api', { target: 'http://localhost:3001/' }));
  }  
}