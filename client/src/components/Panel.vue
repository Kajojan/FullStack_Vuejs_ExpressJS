<template>
  <v-layout column class="text-center">
    <v-flex xs6 class="one">
      <div class="white elevation-2">
        <v-toolbar flat dense dark>
          <v-toolbar-title class="text_title">{{title}}</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
            No slot content defined
        </slot> 

          
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props:[
        'title'
    ]
  }

 
</script>
<style scoped>


.one {
  color: white;
  background: #363636;
}
.text-center {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 2%;
}
.text_title {
  margin-inline-start: 0 !important;
}
</style>
