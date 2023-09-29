import Api from "./Api";

export default {
    getAllSongs(){
        return Api().get('songs')
    }
}