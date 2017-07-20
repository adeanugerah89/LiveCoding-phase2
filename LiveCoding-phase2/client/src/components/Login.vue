<template lang="html">
  <div class="login">
    <div class="container">
      <div class="row">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username" class="form-control" placeholder="username" required="" autofocus="">
          <label for="inputPassword">Password</label>
          <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
          <br>
          <router-link to="Register">Register</router-link>
          <br>
          <br>
          <button @click="login()" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  component: {Register},
  methods: {
    login () {
      this.$http.post('http://localhost:3000/users/login', {username: this.username, password: this.password})
      .then(res => {
        console.log(res.data)
        var token = res.data.token
        localStorage.setItem('token', token)
        localStorage.setItem('id', res.data.user_id)
        localStorage.setItem('username', res.data.username)
        this.$router.push('/Dashboard')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
.form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
</style>
