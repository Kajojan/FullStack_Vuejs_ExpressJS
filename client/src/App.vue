<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

</script>

<template>
  <v-app>
    <Header />
    <main>
      
      <RouterView />
      
    </main>
  </v-app>
</template>

<style scoped>
.v-layout {
  background-color: gray;
}

</style>
