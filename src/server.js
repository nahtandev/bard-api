/**
 * File name: server.js
 * Description: Main server file
 * Author(s): nathandev
 * Creation date: 17/05/2023
 * Last modified date: 17/05/2023
 */

const app = require('./app');
const config = require('../src/config').appConfig;


// Running Server
app.listen(parseInt(config.port), config.hostName, () => {
  console.info(`${config.appName} is listening at ${config.hostName}:${config.port}`);
});
