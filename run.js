var restify = require('restify');
const Logger = require('bunyan');

const logger = new Logger.createLogger({
  name: 'app-name',
  serializers: {
      req: Logger.stdSerializers.req
  }
})

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer({
  log: logger
});
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

server.pre((req, res, next) => {
  req.log.info({ req }, 'REQUEST');
  next();
});