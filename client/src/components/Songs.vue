<script>
import Panel from '@/components/Panel.vue'
import SongsService from "@/services/SongsService.js"

export default {
  data() {
    return {
      songs: null
    }
  },
 async mounted(){
    this.song = await SongsService.getAllSongs()
  },
  components: {
    Panel
  }
}
</script>

<template>
  <v-layout column class="text-center">
    <v-flex xs6 class="one">
      <panel title="Songs" >
        <div v-for="song in songs" :key="song.title">
             {{song.title}} 
            {{ song.artist}}
           {{  song.album }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.error {
  color: red;
}
form {
  font-size: 20px;
  width: 300px;
}

.one {
  color: white;
  background: #363636;
}
.text-center {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 2%;
}
.text_title {
  margin-inline-start: 0 !important;
}
</style>
