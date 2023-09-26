<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <RouterLink to="/" class="router-link"> TabTracker</RouterLink>
    </v-toolbar-title>

    <!-- TODO: Implement ME 
        <v-toolbar-items>
        <v-btn flat dark>
            BROSWE
        </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark class="unstyled-button">
        <RouterLink to="login" class="router-link"> Login </RouterLink>
      </v-btn>
      <v-btn flat dark class="unstyled-button">
        <RouterLink to="register" class="router-link"> Sign Up </RouterLink>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {}
</script>
<style scoped>
.unstyled-button {
  text-decoration: none;
}
.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
