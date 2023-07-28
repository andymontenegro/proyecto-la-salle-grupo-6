<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const primary_hue_key = 'primary_hue';
const default_primary_hue = 260;
const primary_hue = ref(
  parseInt(localStorage.getItem(primary_hue_key)) || default_primary_hue
);

const color_options = ref([
  { label: 'Rojo', value: 343 },
  { label: 'Azul', value: 200 },
  { label: 'Verde', value: 150 },
  { label: 'Violeta', value: 270 },
  { label: 'Amarillo', value: 56 }
]);


const todos = ref([])

const name = ref('')
const input_content = ref('')
const input_category = ref(null)
const input_priority = ref(null)
const todos_asc = computed(() => todos.value.sort((a, b) => {
  return b.createdAt - a.createdAt
}
))
const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) {
    return
  }
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    priority: input_priority.value,
    done: false,
    createdAt: new Date().getTime()
  })
  input_content.value = ''
}

const removeTodo = todo => {
  todos.value = todos.value.filter(t => t !== todo)
}

const primary_color_style = computed(() => {
  return `hsl(${primary_hue.value}, 100%, 50%)`;
})

watch(todos, newVal => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })


watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

watch(primary_hue, (newHue) => {
  // Update the CSS variable when primary_hue changes
  document.documentElement.style.setProperty('--primary-hue', `${newHue}`);
  localStorage.setItem(primary_hue_key, newHue);
});

onMounted(() => {
  const storedHue = localStorage.getItem(primary_hue_key);
  if (!isNaN(storedHue)) {
    primary_hue.value = storedHue;
  }
})



onMounted(() => {
  name.value = localStorage.getItem('name') || []
})

onMounted(() => {
  const storedTodos = localStorage.getItem('todos')
  if (storedTodos) {
    todos.value = JSON.parse(storedTodos)
  }

})




</script>

<template>
  <main class="app">
    <section class="greetings">
      <h2 class="title">Bienvenido, <input type="text" placeholder="tu nombre aquí" v-model="name" /></h2>
    </section>
    <section>
      <label for="color-select">Selecciona un color para tu aplicación:</label>
      <select id="color-select" v-model="primary_hue">
        <option v-for="option in color_options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </section>
    <section class="create-todo">
      <h3>Crear una tarea</h3>

      <form @submit.prevent="addTodo">

        <input type="text" placeholder="ej: Comprar patatas" v-model="input_content">
        <h4>Selecciona una categoría</h4>

        <div class="options">
          <label>
            <input type="radio" name="category" value="business" v-model="input_category">
            <span class="bubble business"></span>
            Trabajo
          </label>

          <label>
            <input type="radio" name="category" value="personal" v-model="input_category">
            <span class="bubble personal"></span>
            Personal
          </label>
        </div>
        <h4>Selecciona la prioridad</h4>
        <div class="priority">
          <label>
            <input type="radio" name="priority" value="Alta" v-model="input_priority">
            <span class="bubble priorities"></span>
            Alta
          </label>

          <label>
            <input type="radio" name="priority" value="Media" v-model="input_priority">
            <span class="bubble priorities"></span>
            Media
          </label>

          <label>
            <input type="radio" name="priority" value="Baja" v-model="input_priority">
            <span class="bubble priorities"></span>
            Baja
          </label>
        </div>

        <input type="submit" value="Agregar tarea">
      </form>

    </section>

    <section class="todo-list">
      <h3>Tareas pendientes por hacer:</h3>
      <div class="list">
        <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">

          <label>
            <input type="checkbox" v-model="todo.done">
            <span :class="`bubble ${todo.category}`"></span>
          </label>
          <div class="todo-content">
            <input type="text" v-model="todo.content">
          </div>
          <div class="actions">
            <div class="priority-label" v-if="todo.priority === 'Alta'"
              :style="{ '--priority-bg': '45%', '--priority-text-color': '95%' }">{{
                todo.priority }}</div>
            <div class="priority-label" v-else-if="todo.priority === 'Media'"
              :style="{ '--priority-bg': '75%', '--priority-text-color': '30%' }">{{
                todo.priority }}</div>
            <div class="priority-label" v-else-if="todo.priority === 'Baja'"
              :style="{ '--priority-bg': '80%', '--priority-text-color': '38%' }">{{
                todo.priority }}</div>
            <button class="delete" @click="removeTodo(todo)">Eliminar</button>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>


