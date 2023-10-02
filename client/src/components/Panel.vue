<template>

      <div class="white elevation-2 & one">
        <v-toolbar flat dense dark>
          <v-toolbar-title class="text_title">{{ title }}</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot> No slot content defined </slot>
        </div>
      </div>

</template>

<script>
export default {
  props: ['title']
}
</script>
<style scoped>
.one {
  color: white;
  background: #363636;
  width: 100%;
  padding: 0;
  
}

.text_title {
  margin-inline-start: 0 !important;
   display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
