<template lang="html">
  <div class="content">
    <div class="panel panel-default">
      <div class="panel-heading">
        <router-link to="/createArticle" class="btn btn-primary">Create New Article</router-link>
      </div>
      <!-- Table -->
      <table class="table">
        <thead>
          <tr>
            <th>Article</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in data">
            <td><router-link :to="'Dashboard/detail/' +article._id">{{article.title}}</router-link></td>
            <td>{{article.username}}</td>
          </tr>
        </tbody>
      </table>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    getAllArticle () {
      this.$http.get('http://localhost:3000/article')
      .then(res => {
        console.log(res.data)
        this.data = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getAllArticle()
  }
}
</script>

<style lang="css">
</style>
