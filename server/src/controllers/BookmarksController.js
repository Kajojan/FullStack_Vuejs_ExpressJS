const { Bookmark, Song, User } = require("../models");
const _ = require('lodash')

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id
      const { songId } = req.query;
      const where = {
        UserId: userId,
      };
      if (songId) {
        where.SongId = songId;
      }
      const bookmark = await Bookmark.findAll({
        where: where,
        include: [{ model: Song }],
      })
      bookmark.map((bookmark) => bookmark.toJSON())
      .map((bookmark) => _.extend({}, bookmark.Song, bookmark));

      res.send(bookmark);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "an error has occured trying to fetch the bookmark",
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id
      const { songId } = req.body;
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      if (bookmark) {
        return res.status(400).send({
          error: "you already have this set as a bookmark",
        });
      }
      const newBookmark = await Bookmark.create(req.body);
      const song = await Song.findByPk(songId);
      const user = await User.findByPk(userId);
      await newBookmark.setUser(user);
      await newBookmark.setSong(song);
      res.send(newBookmark);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "an error has occured trying to create the bookmark",
      });
    }
  },
  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findByPk(bookmarkId);
      await bookmark.destroy();
      res.send(bookmark);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "an error has occured trying to delete the bookmark",
      });
    }
  },
};
