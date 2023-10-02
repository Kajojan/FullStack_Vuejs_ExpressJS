<template>
  <v-layout>
    <v-col cols="4">
      <panel title="Song MetaData" class="ml-2">
        <v-text-field label="Title" type="text" v-model="song.title"></v-text-field>
        <v-text-field label="Artist" type="text" v-model="song.artist"></v-text-field>
        <v-text-field label="Genre" type="text" v-model="song.genre"></v-text-field>
        <v-text-field label="Album" type="text" v-model="song.album"></v-text-field>
        <v-text-field label="Album Image URL" type="text"  v-model="song.albumImageUrl"></v-text-field>
        <v-text-field label="YouTube ID" type="text" v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-col>

    <v-col cols="8">
      <panel title="Song Structure" class="mr-2">
        <v-text-field label="Tab" type="text" v-model="song.tab"></v-text-field>
        <v-text-field label="Lyrics 2" type="text" v-model="song.lyrics"></v-text-field>
      </panel>

      <v-btn dark class="mt-2" @click="create"> Create Song </v-btn>
    </v-col>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue'
import SongsService from '@/services/SongsService'
export default {
  
  data() {
    return {
      song:{title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null}
    }
  },
  components: {
    Panel
  },
  methods: {
    async create(){
      try{
        await SongsService.post(this.song)
        this.$router.push({
          name:'songs'
        })

      }catch(error){
        console.log(error);
      }
    }
  },
}
</script>

<style>
v-text-field {
  height: 100px;
}
</style>
