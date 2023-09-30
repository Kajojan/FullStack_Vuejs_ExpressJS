<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel.vue'

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
  },
  components: {
        Panel
    }
}
</script>

<template>
<v-layout column>
    <v-col cols="6" offset="3">
     <panel title="Login">
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

    </panel>
    </v-col>
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
</style>
