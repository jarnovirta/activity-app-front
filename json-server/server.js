const jsonServer = require('json-server');
const server = jsonServer.create();
const activitiesData = require('./dataGenerator.js')();
const router = jsonServer.router(activitiesData);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/strava-activities': '/strava-activities'
}));
server.use(router);
server.listen(port);
console.log('json-server running on port ' + port)