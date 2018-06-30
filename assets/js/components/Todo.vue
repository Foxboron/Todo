<template>
<div id="q-app">
    <section v-for="todo in info">
    {{todo.name}}
    {{todo.description}}
    </section>
      <q-btn
        :label="`Count ${count}`"
        @click="count++"
        :repeat-timeout="1000"
        color="primary"
        icon="create"
      />
</div>
</template>
<script charset="utf-8">
export default {
    name: 'todo',
    data () {
        return {
            info: "Loading",
            loading: true,
            errored: false,
            count: 0
        }
    },
    mounted(){
        this.fetchData();
    },
    methods: {
        alert () {
       this.$q.dialog({
            title: 'Good job!'
          })
        },
        fetchData (){
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
