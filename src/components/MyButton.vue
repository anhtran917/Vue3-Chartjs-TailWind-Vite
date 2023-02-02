
<template>
  <span class="float ml-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style="display: inline-flex;">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </span> 
  <button class="mb-1 relative inline-flex items-center px-1 py-1 bg-transparent text-sky-400" @click="deleteToDo">
  <!-- <button class="m-1 relative inline-flex items-center px-4 py-1 overflow-hidden text-sm font-medium text-gray-600 border-b-4 border-blue-700 hover:border-blue-500 rounded hover:text-white hover:line-through hover:decoration-2 group bg-blue-500 hover:bg-blue-400" @click="deleteToDo"> -->
      {{label}}
  </button>

</template>

<script lang="ts">
export default {
  name: 'MyButton',
  props: {
    label: { required: true, type: String },
    id: { required: true, type: String }, 
    done: { required: true, type: String },   
  },
  
  data() {
    return {

    }
  },
  methods: {
    deleteToDo() {
      this.$emit("item-deleted");
    },
  }
}
</script>
