
<template>
  <button class="m-1 relative inline-flex items-center px-4 py-1 overflow-hidden text-sm font-medium text-gray-600 border-b-4 border-blue-700 hover:border-blue-500 rounded hover:text-white hover:line-through hover:decoration-2 group bg-blue-500 hover:bg-blue-400" @click="deleteToDo">
      <!-- <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
      <svg class="w-5 h-5 ml-2 mt-0" fill="none" stroke="currentColor" viewBox="0 5 1 45" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </span>
      <span class="relative">{{title}}</span> -->
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
