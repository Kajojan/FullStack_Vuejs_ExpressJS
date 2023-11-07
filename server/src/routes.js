const AuthenticationsController = require("./controllers/AuthenticationsController");
const AuthenticationsControllerPolicy = require("./policies/AuthenticationControllersPolicy");
const SongsController = require("./controllers/SongsController");
const BookmarksController = require('./controllers/BookmarksController')
const HistoryController = require('./controllers/HistoryController')
const isAuthenticated = require('./policies/isAuthenticated')

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
  app.get("/bookmarks",isAuthenticated, BookmarksController.index);
  app.post("/bookmarks", isAuthenticated,BookmarksController.post);
  app.delete("/bookmarks/:bookmarkId", isAuthenticated, BookmarksController.delete);
  app.get('/history',isAuthenticated, HistoryController.index)
  app.post('/history',isAuthenticated,  HistoryController.post)

};
