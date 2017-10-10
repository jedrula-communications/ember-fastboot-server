// TODO a hack as I had some problems with setting env variables on my raspberry pi
process.env.PORT = process.env.PORT || 5005;
process.env.DIST_PATH = process.env.DIST_PATH || './jedrula-app-dist-only';

const FastBootAppServer = require('fastboot-app-server');

const server = new FastBootAppServer({
  distPath: process.env.DIST_PATH,
  gzip: true // Optional - Enables gzip compression.
});

server.start();
