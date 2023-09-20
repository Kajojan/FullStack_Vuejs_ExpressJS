const AuthenticationsController = require('./controllers/AuthenticationsController')

module.exports = (app) => {
  app.post("/register", AuthenticationsController.register)
};
