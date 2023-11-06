const { History, Song, User } = require("../models");
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.query.userId
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      })

        histories.map(history => history.toJSON())
        .map(history => _.extend(
          {}, 
          history.Song, 
          history
        ))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'an error has occured trying to fetch the history'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId,userId} = req.body
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the history object'
      })
    }
  }
};