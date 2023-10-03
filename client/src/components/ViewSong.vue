<template>
  <panel title="Song Metadata" class="mt-4">
    <div>
      {{ song.title }}
      {{ song.artist }}
      {{ song.genre }}
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService.js'
import Panel from '@/components/Panel.vue'

export default {
  data() {
    return {
      song: {}
    }
  },
  async mounted() {
    const songsId = this.$store.state.route.params.songId
     this.song = (await SongsService.show(songsId)).data
  },

  components: {
    Panel
  }
}
</script>

<style></style>
