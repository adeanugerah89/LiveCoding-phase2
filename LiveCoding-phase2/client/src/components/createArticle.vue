<template lang="html">
  <div class="CreateArticle">
      <form>
        <div class="form-group">
          <input v-model='title' type="title" class="form-control" id="title" placeholder="title">
        </div>
          <textarea v-model='content' name="name" rows="8" cols="80" placeholder="description"></textarea>
        <br>
        <button @click='createArticle()' type="submit" class="btn btn-default">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    createArticle () {
      this.$http.post(`http://localhost:3000/article`, {
        title: this.title,
        content: this.content,
        user_id: localStorage.getItem('id'),
        username: localStorage.getItem('username')
      })
      .then(res => {
        this.$router.push('/Dashboard')
      })
    }
  }
}
</script>

<style lang="css">
</style>
