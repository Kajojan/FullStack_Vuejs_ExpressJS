<template>
  <panel title="Bookmarks">
        <v-table theme="dark">
            <thead>
              <tr>
                <th class="text-left">
                  Title
                </th>
                <th class="text-left">
                  Artist
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in bookmarks"
                :key="item.title"
              >
                <td>{{ item.Song.title }}</td>
                <td>{{ item.Song.artist }}</td>
              </tr>
            </tbody>
          </v-table>
  </panel>
</template>

<script>
import Panel from '@/components/Panel.vue'
import {mapState} from 'vuex'
import BookmarksService from "@/services/BookmarksService.js"

export default {
  data() {
    return {
      bookmarks: [
      ]
    }
  },
  components: {
    Panel
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index(
        {userId: this.user.id}
      )).data
    }
    console.log(this.bookmarks);
  }
}
</script>

<style></style>
