<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <RouterLink to="/" class="router-link"> TabTracker</RouterLink>
    </v-toolbar-title>

    
        <v-toolbar-items>
         <v-btn flat dark class="unstyled-button" v-if="!$store.state.isUserLoggedIn">
        <RouterLink to="songs" class="router-link"> Browse </RouterLink>
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark class="unstyled-button" v-if="!$store.state.isUserLoggedIn">
        <RouterLink to="login" class="router-link"> Login </RouterLink>
      </v-btn>
      <v-btn flat dark class="unstyled-button" v-if="!$store.state.isUserLoggedIn">
        <RouterLink to="register" class="router-link"> Sign Up </RouterLink>
      </v-btn>

      <v-btn flat dark v-if="$store.state.isUserLoggedIn" @click="logout">
        <RouterLink to="/" class="router-link"> Log out </RouterLink>
      </v-btn>
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
        name:'root'
      })
    }
  }
}
</script>
<style scoped>
.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
