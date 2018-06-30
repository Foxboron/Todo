<template>
<div id="q-app">
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
        <q-btn flat color="red"label="Delete":hidden="isEditing" />
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
            isEditing: this.edit ? this.edit : false
        }
    },
    methods:{
        save(){
            this.isEditing = false;
        }
    }
};
</script>
