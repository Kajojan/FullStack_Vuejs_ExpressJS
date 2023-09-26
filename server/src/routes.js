const AuthenticationsController = require("./controllers/AuthenticationsController");
const AuthenticationsControllerPolicy = require("./policies/AuthenticationControllersPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationsControllerPolicy.register,
    AuthenticationsController.register
  );
  app.post(
    "/login",
    AuthenticationsController.login
  );
};
