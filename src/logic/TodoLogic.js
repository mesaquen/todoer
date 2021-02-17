const KEY = '__todos-'
export const getTodos = () => {
  const data = window.localStorage.getItem(KEY)

  if (data) {
    try {
      const todos = JSON.parse(data)
      return todos
    } catch (e) {
      console.error(e)
    }
  }

  return []
}

export const setTodos = todos => {
  const data = JSON.stringify(todos)
  window.localStorage.setItem(KEY, data)
}
