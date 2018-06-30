<template>
<div id="q-app">
    <todo-card v-for="todo in info"
        v-bind:todo="todo"
        v-bind:key="todo.id"
        v-bind:edit="todo.edit"/>
<q-btn round color="secondary" @click="addTodo" >
  <q-icon name="add"/>
</q-btn>
</div>
</template>
<script charset="utf-8">

import TodoCard from "./TodoCard.vue";

export default {
    name: 'todo',
  components: {
    'todo-card': TodoCard,
  },
    data () {
        return {
            info: "Loading",
            loading: true,
            edit: false,
            errored: false,
            count: 0
        }
    },
    mounted(){
        this.fetchData();
    },
    methods: {
        addTodo(){
            this.info.push({edit: true})
        },
        fetchData () {
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
