<template>
<div id="q-app" v-if="!deleted">
<q-card inline>
  <q-card-media>
  </q-card-media>
  <q-card-title>
      <q-input v-model="todo.name" type="text"
          v-bind:readonly="!isEditing"
          v-bind:hide-underline="!isEditing"/>
  </q-card-title>
  <q-card-main>
      <q-input v-model="todo.description" type="text"
          v-bind:readonly="!isEditing"
          v-bind:hide-underline="!isEditing"/>
  </q-card-main>
  <q-card-separator />
  <q-card-actions>
        <q-btn flat icon="edit" @click="isEditing = !isEditing" :hidden="isEditing"/>
        <q-btn flat color="primary" label="Save" :hidden="!isEditing" @click="save"/>
        <q-btn flat color="primary" label="Done" :hidden="isEditing"/>
        <q-btn flat color="red" label="Delete" :hidden="isEditing" @click="deleteCard" />
  </q-card-actions>
</q-card>
</div>
</template>
<script charset="utf-8">
export default {
    name: 'todo-card',
    props: ["edit", "todo"],
    data(){
        return {
            isEditing: this.edit ? this.edit : false,
            key: this.todo.id,
            deleted: false
        }
    },
    methods:{
        save(){
            this.isEditing = false;
            if (this.key === undefined) {
                console.log("New")
                this.$http
                    .post('/api/todos', {
                        name: this.todo.name,
                        description: this.todo.description
                    })
                    .then(response => {
                        this.key = response.data.id;
                        console.log(response.data)
                        console.log(this.key)
                    })
            } else {
                this.$http
                    .put('/api/todos/'+this.key, {
                        name: this.todo.name,
                        description: this.todo.description
                    })
            }
        },
        deleteCard(){
            this.deleted = true;
            this.$http.delete('/api/todos/'+this.key)
        }
    }
};
</script>
