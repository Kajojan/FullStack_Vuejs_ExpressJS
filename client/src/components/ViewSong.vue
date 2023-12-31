<template>
  <v-layout column>
    <v-col cols="6" class="one & mt-2">
      <panel title="Song">
        <div class="button_grid mb-2 mt-2"></div>
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

            <v-btn
              dark
              class="mt-2"
              :to="{
                name: 'edit',
                params: {
                  songId: song.id
                }
              }"
            >
              Edit
            </v-btn>

            <v-btn
              dark
              v-if="this.$store.state.isUserLoggedIn && !bookmark"
              class="mt-2 ml-2"
              @click="setAsBookmark"
            >
              Bookmark
            </v-btn>

            <v-btn
              dark
              v-if="this.$store.state.isUserLoggedIn && bookmark"
              class="mt-2 ml-2"
              @click="unsetAsBookmark"
            >
              Unbookmark
            </v-btn>
          </v-col>
          <v-col cols="6">
            <img class="album-image" :src="song.albumImageUrl" />
            <div>{{ song.album }}</div>
          </v-col>
        </v-layout>
      </panel>

      <panel title="YouTube Video" class="mt-2">
        <VueYtframe :video-id="song.youtubeId" height="500" />
      </panel>
    </v-col>
    <v-col cols="6" class="mt-2">
      <panel title="Tab">
        <textarea readonly v-model="song.tab"></textarea>
      </panel>
      <panel title="Lyrics" class="mt-2">
        <textarea readonly v-model="song.lyrics"></textarea>
      </panel>
    </v-col>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService.js'
import Panel from '@/components/Panel.vue'
import BookmarksService from '@/services/BookmarksService.js'
import SongHistoryService from '@/services/SongHistoryService.js'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      song: {},
      bookmark: null
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user', 'route'])
  },
  async mounted() {
    const songsId = this.route.params.songId
    this.song = (await SongsService.show(songsId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songsId,
      })
    }
  },

  components: {
    Panel
  },
  watch: {
    async song(value) {
      if (!this.$store.state.isUserLoggedIn) {
        console.log(this.$store.state.isUserLoggedIn)
        return
      }
      try {
        const query = {
          songId: this.song.id,
        }
        const bookmark = (await BookmarksService.index(query)).data
        bookmark.length ? (this.bookmark = bookmark[0]) : null
        console.log('bookmark ', this.bookmark)
      } catch (err) {
        console.log(err)
      }
    }
  },

  methods: {
    async setAsBookmark() {
      try {
        const bookmark = {
          songId: this.song.id,
        }
        this.bookmark = (await BookmarksService.post(bookmark)).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark() {
      console.log(this.bookmark)
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
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
