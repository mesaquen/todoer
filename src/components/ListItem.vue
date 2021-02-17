<template>
  <div
    class="list-item-container"
    @mouseenter="toggleDelete"
    @mouseleave="toggleDelete"
  >
    <input type="checkbox" :checked="done" @change="toggleItem" />
    <label v-if="done || !editing" :class="{ done }">{{ title }}</label>
    <input v-else type="text" :value="title" />
    <button v-if="showDelete" class="delete" @click="handleDelete">x</button>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    id: String,
    title: String,
    done: Boolean,
    editing: Boolean,
  },

  data: () => ({
    showDelete: false,
  }),
  methods: {
    toggleItem() {
      this.$emit('toggle-item', this.id)
    },

    handleDelete() {
      this.$emit('delete-item', this.id)
    },

    toggleDelete() {
      this.showDelete = !this.showDelete
    },
  },
}
</script>

<style lang="scss" scoped>
.list-item-container {
  display: flex;
  align-items: center;
  position: relative;
}

input[type='checkbox'] {
  margin-right: 1rem;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: #999;
}

.delete {
  color: #aaa;
  background: none;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;
  outline: none;
}
</style>
