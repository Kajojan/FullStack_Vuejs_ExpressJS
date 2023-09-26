<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<template>
  <v-layout column class="text-center">
    <v-flex xs6 class="one">
      <div class="white elevation-2">
        <v-toolbar flat dense class="black" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br />
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <br />
          <div class="error" v-html="error" />
          <br />
          <v-btn dark class="cyan" @click="register"> Login </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.error {
  color: red;
}
form {
  font-size: 20px;
  width: 300px;
}

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
</style>
