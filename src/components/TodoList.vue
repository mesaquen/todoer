<template>
  <div>
    <h3>Tasks</h3>
    <ListItem
      v-for="item in openTodos"
      v-on="$listeners"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :done="item.done"
      :editing="item.editing"
    />
    <input
      @keydown="handleSubmit"
      @input="handleChange"
      type="text"
      placeholder="add todo"
      :value="title"
    />
    <h3>Completed tasks</h3>
    <div v-if="completedTodos.length">
      <ListItem
        v-for="item in completedTodos"
        v-on="$listeners"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :done="item.done"
      />
    </div>
    <p v-else>You haven't competed any taks yet</p>
  </div>
</template>

<script lang="js">
import ListItem from '@/components/ListItem.vue'
import {uuid} from 'vue-uuid'

export default {
  name: 'TodoList',

  data: () => ({
    title: '',
  }),

  computed: {
    openTodos() {
      return this.todos.filter(this.filterNotDone)
    },
    completedTodos() {
      return this.todos.filter(this.filterDone)
    },
  },

  props: {
    todos: {
      type: Array,
      required: true,
    },
  },

  methods: {
    filterDone: item => item.done,
    filterNotDone: item => !item.done,
    handleChange(event) {
      this.title = event?.target?.value
    },
    handleSubmit(event) {
      const key = event.keyCode ?? event.which
      const title = this.title.trim()
      if (key === 13 && title.length) {
        this.$emit('add-todo', {
          id: uuid.v4(),
          title,
          done: false,
        })
        this.title = ''
      }
    },
    checkCompleted() {
      return this.todos.some(this.filterDone)
    },
  },

  components: {
    ListItem,
  },
}
</script>
