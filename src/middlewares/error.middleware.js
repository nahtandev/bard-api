/**
 * File name: error.middleware.js
 * Description: This file contain a middleware that catch any error in application
 * Author(s): nathandev
 * Creation date: 17/05/2023
 * Last modified date: 17/05/2023
 */

const { errorConfig } = require('../config');
const { logger } = require('../utils/logger');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let response = { success: false };

  const errorCode = err.code || errorConfig.defaultCode;

  const errorMessage =
    req.t(`errors.httpRequest.${errorCode}`) || errorConfig.defaultMessage;

  // Get headers, body from request
  logger.error({
    err: err,
    req: {
      headers: req.headers,
      body: req.body,
    },
  });

  // If body data send is'nt valid JSON
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    response = {
      success: false,
      status: err.status,
      error: {
        code: 'BAD_REQUEST',
        message: 'Bad request is send',
        errors: [
          {
            field: 'body',
            message: 'Body data format is invalid',
          },
        ],
      },
    };
  } else {
    response = {
      success: false,
      status: err.status || errorConfig.defaultStatus,
      error: {
        code: errorCode,
        message: errorMessage,
        errors: err.errors || [],
      },
    };
  }

  //   Response JSON with error message
  res.status(response.status).json(response);
};

module.exports = errorHandler;
