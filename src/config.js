/**
 * File name: index.js
 * Description: Main file that contain all application configuration
 * Author(s): nathandev
 * Creation date: 17/05/2023
 * Last modified date: 17/05/2023
 */

// Upload env variable
require('dotenv').config();

const appConfig = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.LISTEN_PORT || 3000,
  appName: process.env.APP_NAME,
  hostName: process.env.HOST_NAME,
};

const corsConfig = {
  origin: JSON.parse(process.env.ALLOW_LIST),
  credential: true,
};

const errorConfig = {
  defaultCode: 'INTERNAL_SERVER_ERROR',
  defaultStatus: 500,
  defaultMessage:
    'Internal server error. An internal server error has occurred.',
};

const pinoConfig = {
  logLevel: process.env.PINO_LOG_LEVEL || 'info',
};



module.exports = {
  appConfig,
  corsConfig,
  errorConfig,
  pinoConfig
};
