<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="title">
      <RouterLink :to="{ name: 'root' }" class="router-link"> TabTracker</RouterLink>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        class="unstyled-button"
        v-if="$store.state.isUserLoggedIn"
        :to="{
          name: 'songs'
        }"
      >
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        class="unstyled-button"
        v-if="!$store.state.isUserLoggedIn"
        :to="{ name: 'login' }"
      >
        Login
      </v-btn>
      <v-btn
        flat
        dark
        class="unstyled-button"
        v-if="!$store.state.isUserLoggedIn"
        :to="{ name: 'register' }"
      >
        Sign Up
      </v-btn>

      <v-btn flat dark v-if="$store.state.isUserLoggedIn" @click="logout"> Log out </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>
<style scoped>
.title {
  max-width: fit-content;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
