require('dotenv/config');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const logger = require('morgan');

module.exports = (app) => {
  app.use(
    cors({
      origin: '*',
      methods: '*',
      allowedHeaders: '*',
      exposedHeaders: '*',
    })
  );
  app.use(express.json());
  app.use(compression({ level: 9, strategy: 4 }));

  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  }
};
