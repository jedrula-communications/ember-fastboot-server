console.log(process.env.PORT, process.env.DIST_PATH);
//throw 'x';
const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: process.env.DIST_PATH || "../jedrula-app/dist",
  gzip: true // Optional - Enables gzip compression.
});

server.start();
