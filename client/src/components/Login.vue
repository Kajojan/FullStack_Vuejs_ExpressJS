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
        const respone = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', respone.data.token)
        this.$store.dispatch('setUser', respone.data.user)
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
        <v-toolbar flat dense  dark>
          <v-toolbar-title class="text_title">Login</v-toolbar-title>
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
          <v-btn dark class="cyan" @click="login"> Login </v-btn>
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
.text_title {
  margin-inline-start: 0 !important;
}
</style>
