<template>
<div id="app">
  <section v-if="errored">
    <p>Error</p>
  </section>

   <section v-else>
    <p>{{info}}</p>
   </section>

</div>
</template>

<script charset="utf-8">
export default {
  name: 'todo',
  data () {
    return {
      info: "Loading",
      loading: true,
      errored: false
    }
  },
    created(){
        this.fetchData();
    },
methods: {
    fetchData: function(){
        this.$http
          .get('/api/todos')
          .then(response => {
            this.info = response.data;
          })
          .catch(error => {
            this.errored = true
          })
          .finally(() => this.loading = false)
          }
    }
};
</script>
