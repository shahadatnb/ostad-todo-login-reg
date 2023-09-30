import {ref, reactive, computed} from 'vue'
import { defineStore } from "pinia";

const todoStore = defineStore('todo',()=>{
    
    const todoList = ref([{
        title: 'taks1',
        status: 1
    }]);

    const addTodoItem = (data) => {
        let item = {
            title: data,
            status: 0
        }
        todoList.value.push(item)
    };

    const incompleteTasks = computed(() => {
        return todoList.value.filter((item) => {
            return item.status == 0
        })
    });

    return {
        todoList,
        addTodoItem,
        incompleteTasks
    }

})

export {todoStore}