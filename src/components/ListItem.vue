<template>
  <div class="list-item-container">
    <input type="checkbox" :checked="done" @change="toggleItem" />
    <label v-if="done || !editing" :class="{ done }">{{ title }}</label>
    <input v-else type="text" :value="title" />
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
  methods: {
    toggleItem() {
      this.$emit('toggle-item', this.id)
    },
  },
}
</script>

<style scoped>
.list-item-container {
  display: flex;
  align-items: center;
}

.done {
  text-decoration: line-through;
  color: #999;
}
</style>
