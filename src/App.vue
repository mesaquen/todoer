<template>
  <Container id="app">
    <h1>TODOer</h1>
    <p>A simple Vue.js todo list</p>
    <TodoList
      :todos="todos"
      @add-todo="onAddTodo"
      @toggle-item="handleToggle"
      @delete-item="handleDelete"
      @update-item="handleUpdateItem"
    />
  </Container>
</template>

<script>
import Container from '@/components/Container.vue'
import TodoList from '@/components/TodoList.vue'
import { getTodos, setTodos } from '@/logic/TodoLogic'

export default {
  name: 'App',

  data: () => ({
    todos: [],
  }),

  mounted: function() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      const todos = getTodos()
      this.todos = todos
    },

    updateTodos(todos) {
      this.todos = todos
      setTodos(todos)
    },

    onAddTodo(todo) {
      const next = this.todos.concat(todo)
      this.updateTodos(next)
    },

    handleToggle(id) {
      const next = this.todos.map(item =>
        item.id === id
          ? {
              ...item,
              done: !item.done,
            }
          : item
      )

      this.updateTodos(next)
    },

    handleDelete(id) {
      const next = this.todos.filter(item => item.id !== id)
      this.updateTodos(next)
    },

    handleUpdateItem(item) {
      const next = this.todos.map(todo => (todo.id === item.id ? item : todo))
      this.updateTodos(next)
    },
  },

  components: {
    Container,
    TodoList,
  },
}
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
