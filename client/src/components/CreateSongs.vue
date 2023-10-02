<template>
  <v-layout>
    <v-col cols="4">
      <panel title="Song MetaData" class="ml-2">
        <v-text-field
          label="Title"
          type="text"
          v-model="song.title"
          required
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          label="Artist"
          type="text"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          type="text"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          type="text"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          label="Album Image URL"
          type="text"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>
        <v-text-field
          label="YouTube ID"
          type="text"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-col>

    <v-col cols="8">
      <panel title="Song Structure" class="mr-2">
        <v-text-field label="Tab" type="text" v-model="song.tab"></v-text-field>
        <v-text-field label="Lyrics 2" type="text" v-model="song.lyrics"></v-text-field>
      </panel>
      
      <v-btn dark class="mt-2" @click="create"> Create Song </v-btn>
      <span class="error ml-2" v-if="error">
      {{error}}
      </span>
    </v-col>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue'
import SongsService from '@/services/SongsService'
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create() {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
v-text-field {
  height: 100px;
}
.error{
  color: red;
  font-size: 20px;
}
</style>
