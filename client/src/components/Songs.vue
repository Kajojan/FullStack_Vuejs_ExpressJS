<script>
import Panel from '@/components/Panel.vue'
import SongsService from '@/services/SongsService.js'

export default {
  methods: {
     navigateTo (route) {
      this.$router.push(route)
    }
  },
  data() {
    return {
      songs: null
    }
  },
  async mounted() {
    this.songs = (await SongsService.getAllSongs()).data
  },
  components: {
    Panel
  }
}
</script>

<template>
  <v-layout column>
    <v-col cols="6" class="one & mt-2" offset="3">
      <panel title="Songs">
        <div class="button_grid mb-2 mt-2">
        <v-btn icon color="white" size="large" class="button" @click="navigateTo({name: 'songs-create'})">
          <v-icon x-large >mdi-plus</v-icon>
        </v-btn>
        </div>

        <div v-for="song in songs" :key="song.id">
          <v-layout>
            <v-col cols="6">
              <div class="song-title">
                {{ song.title }}
              </div>
              <div class="song-artist">
                {{ song.artist }}
              </div>
              <div class="song-genre">
                {{ song.genre }}
              </div>

      <v-btn dark class="mt-2" @click="navigateTo({
                  name: 'song', 
                  params: {
                    songId: song.id
                  }
                })">  View </v-btn>
            </v-col>

            <v-col cols="6">
              <img class="album-image" :src="song.albumImageUrl" />
            </v-col>
          </v-layout>
        </div>
      </panel>
    </v-col>
  </v-layout>
</template>

<style scoped>
.error {
  color: red;
}

.button_grid{
  display: grid;
  justify-content: center; 
  align-items: center;
}
.one {
  color: white;
  background: #363636;
  padding: 0;
}

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
