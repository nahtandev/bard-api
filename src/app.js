/**
 * File name: app.js
 * Description: Configures and starts the server
 * Author(s): Nathan Dev
 * Creation date: 17/05/2023
 * Last modified date: 17/05/2023
 */

const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/error.middleware');
const { corsConfig } = require('./config');
const chat = require('./routes/chat.route');

/** Configure server **/
const app = express();

/** Configure Middleware **/

// Enable parsing of JSON data in HTTP request bodies
app.use(express.json());

//Enable parsing of URL-encoded form data with the extended option set to true
app.use(express.urlencoded({ extended: true }));

// Enable CORS for the Express application with the specified configuration options
app.use(cors(corsConfig));

/** Routes **/

// Thread Route
app.use('/chat', chat);

// Error Middleware
app.use(errorHandler);

module.exports = app;
