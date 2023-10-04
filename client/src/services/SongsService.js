import Api from "./Api";

export default {
    getAllSongs(){
        return Api().get('songs')
    },
    post(song){
        return Api().post('songs', song)
    },
    show(songId){
        return Api().get(`songs/${songId}`)
    },
    edit(song){
        return Api().put(`songs/edit/${song.id}`, song)
    },
}