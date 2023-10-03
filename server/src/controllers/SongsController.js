const { Song } = require("../models");

module.exports = {
  async getAllSong(req, res) {
    try {
      const song = await Song.findAll({
        limit:10
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has accoured trying to log in'
      })
    }
  },
  async postNewSong(req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({

        error: 'An error has accoured trying to log in'
      })
    }
  },
  async show(req,res){
    try{
      const song = await Song.findByPk(req.params.songId) //Sequelize findByPk = findById() 
      res.send(song)

    }catch(err){
      console.dir(err);

      res.status(500).send({
        error: 'An error has accoured trying to log in'
      })   
     }
  }

}