<script setup>
import { ref, reactive } from 'vue';
import { todoStore } from '../store/todoStore.js';
const todo = todoStore();

let todoItem = ref([]);
function todoSave(){
  todo.addTodoItem(todoItem);
  todoItem.value = [];
}


</script>

<template>
  <div class="container">
        <label for="name">Title</label>
        <input type="text" v-model="todoItem">
        <button @click="todoSave()">Add</button>
  </div>
  <p>{{ todo.todoList }}</p>
</template>

<style scoped>

</style>