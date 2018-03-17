const cluster = require('cluster'),
  _ = require('lodash'),
  App = require('./app'),
  config = require('./config'),
  NODE_ENV = process.env.NODE_ENV || 'development',
  NUM_CPUS = require('os').cpus().length;

function spawnWorker() {
  const worker = cluster.fork();

  worker.once('exit', function (code, signal) {
    if (signal) {
      console.info(`Server worker ${worker.id} was terminated with signal ${signal}, attempting to replace worker`);
      spawnWorker();
    } else if (code !== 0) {
      console.info(`Server worker ${worker.id} terminated with error code ${code}, attempting to replace worker`);
      spawnWorker();
    }
  });
}

if (!!NODE_ENV.match(/development/i)) {
  config.SERVER_PORT = config.DEV_SERVER_PORT;

  App(config);
  console.info(`Server is running in ${NODE_ENV} mode`);
} else {
  config.SERVER_PORT = config.PROD_SERVER_PORT;

  if (cluster.isMaster) {
    console.info(`Server is running in production mode, attempting to start ${NUM_CPUS} workers`);
    _.times(NUM_CPUS, () => spawnWorker());
  } else {
    App(config);
    console.info(`Server started worker ${cluster.worker.id}`);
  }
}
