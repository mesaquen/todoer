<template>
  <div
    class="list-item-container"
    @mouseenter="displayDelete"
    @mouseleave="hideDelete"
  >
    <input type="checkbox" :checked="done" @change="toggleItem" />
    <label v-if="done || !editing" :class="{ done }" @click="toggleEditing">{{
      title
    }}</label>
    <input
      v-else
      type="text"
      :value="editingTitle"
      @blur="updateItem"
      @input="handleChangeTitle"
    />
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
  },

  data: () => ({
    showDelete: false,
    editing: false,
    editingTitle: '',
  }),
  methods: {
    toggleEditing() {
      this.editingTitle = this.editing ? '' : this.title
      this.editing = !this.editing
    },

    updateItem() {
      const { id, done, editingTitle } = this
      this.$emit('update-item', { id, done, title: editingTitle })
      this.toggleEditing()
    },

    toggleItem() {
      this.$emit('toggle-item', this.id)
    },

    handleDelete() {
      this.$emit('delete-item', this.id)
    },

    handleChangeTitle(event) {
      this.editingTitle = event?.target?.value
    },

    displayDelete() {
      this.showDelete = true
    },

    hideDelete() {
      this.showDelete = false
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
