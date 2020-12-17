const ongkirRoute = require('../routes/route.ongkir');

module.exports = (app) => {
  app.use('/api', ongkirRoute);
  app.get('/test-api', (req, res) => {
    res.status(200).json({
      message: 'Welcome to API-Testing',
    });
  });
};
