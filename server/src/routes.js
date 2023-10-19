const AuthenticationsController = require("./controllers/AuthenticationsController");
const AuthenticationsControllerPolicy = require("./policies/AuthenticationControllersPolicy");
const SongsController = require("./controllers/SongsController");
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationsControllerPolicy.register,
    AuthenticationsController.register
  );
  app.post("/login", AuthenticationsController.login);

  app.get("/songs", SongsController.getAllSong);
  app.post("/songs", SongsController.postNewSong);
  app.get("/songs/:songId", SongsController.show);
  app.put("/songs/edit/:songId", SongsController.edit);
  app.get("/bookmarks", BookmarksController.index);
  app.post("/bookmarks", BookmarksController.post);
  app.delete("/bookmarks/:bookmarkId", BookmarksController.delete);
};
