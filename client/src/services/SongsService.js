import Api from './Api'

export default {
  getAllSongs(value) {
    return Api().get('songs', {
        params: {
          search: value
        }
      })  },
  post(song) {
    return Api().post('songs', song)
  },
  show(songId) {
    return Api().get(`songs/${songId}`)
  },
  edit(song) {
    return Api().put(`songs/edit/${song.id}`, song)
  }
}
