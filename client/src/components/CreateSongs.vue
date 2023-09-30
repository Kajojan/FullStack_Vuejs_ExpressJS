<template>
  <v-layout>
    <v-col cols="4">
      <panel title="Song MetaData" class="ml-2">
        <form>
          <v-text-field label="Title" type="text"></v-text-field>
          <v-text-field label="Artist" type="text"></v-text-field>
          <v-text-field label="Genre" type="text"></v-text-field>
          <v-text-field label="Album" type="text"></v-text-field>
          <v-text-field label="Album Image URL" type="text"></v-text-field>
          <v-text-field label="YouTube ID" type="text"></v-text-field>
        </form>
      </panel>
    </v-col>

    <v-col cols="10">
      <panel title="Song Structure" class="ml-2">
        <form class="full-width-form">
          <v-text-field label="Structure 1" type="text"></v-text-field>
          <v-text-field label="Structure 2" type="text"></v-text-field>
        </form>
      </panel>
    </v-col>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue'
export default {
  data() {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
