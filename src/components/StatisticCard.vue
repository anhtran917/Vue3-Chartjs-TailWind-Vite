<template>
  <div class="w-1/4 rounded overflow-hidden shadow-lg hover:bg-gray-100 hover:cursor-pointer float-left ml-5">
    <div class="px-3 py-1">
      <p class=" text-sm mb-2">{{ carddata.title }}</p>
      <p class="font-bold text-gray-700 text-xl">
        {{ carddata.statistic }}
      </p>
    </div>
    <div class="px-3 py-2">
      <div v-if="carddata.risingStatus=='1'" class="text-green-500 font-bold"> 
        <span class="float-left">{{ carddata.percentChange }}%</span>
        <span class="float-left ml-4">↑</span>
      </div>
      <div v-if="carddata.risingStatus=='0'" class="text-red-500 font-bold"> 
        <span class="float-left">{{ carddata.percentChange }}%</span>
        <span class="float-left ml-4">↓</span>
      </div>
      <span class="ml-4">{{ carddata.percentExplainer }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    rising:'',
  }),
  name: "StatisticCard",
  props: {
    carddata:{
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {

  },
  created(){
    
  }
}
</script>
