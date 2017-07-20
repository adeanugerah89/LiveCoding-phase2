<template lang="html">
  <div class="register">
    <div class="container">
      <div class="row">
        <form class="form-register">
          <h2 class="form-signin-heading">Please sign up</h2>
          <label for="username">username</label>
          <input v-model='username' type="username" id="username" class="form-control" placeholder="username" required="" autofocus="">
          <label for="inputPassword">Password</label>
          <input v-model='password' type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
          <br>
          <button @click='signUp()' class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      this.$http.post(`http://localhost:3000/users`, {
        username: this.username,
        password: this.password
      })
      .then(res => {
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
.form-register {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
</style>
