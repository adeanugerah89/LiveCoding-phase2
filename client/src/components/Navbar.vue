<template>
  <div id="navbar">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <h4 style="color:white;">Welcome {{username}}</h4>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" placeholder="search Thread" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Search</button>
            <button @click='logout()' type="submit" class="btn btn-danger">Logout</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script type="text/javascript">
// import Login from '@/components/Login'
  export default {
    data () {
      return {
        username: ''
      }
    },
    methods: {
      logout () {
        localStorage.clear()
        this.$router.push('/')
      }
    },
    created () {
      this.username = localStorage.getItem('username')
    }
  }
</script>

