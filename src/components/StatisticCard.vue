<template>
  <div class="w-1/4 rounded overflow-hidden shadow-lg hover:bg-gray-100 hover:cursor-pointer float-left ml-5">
    <div class="px-3 py-1">
      <p class=" text-sm mb-2">{{ title }}</p>
      <p class="font-bold text-gray-700 text-xl">
        {{ statistic }}
      </p>
    </div>
    <div class="px-3 py-2">
      <div v-if="risingStatus=='1'" class="text-green-500 font-bold"> 
        <span class="float-left">{{ percentChange }}%</span>
        <span class="float-left ml-4">↑</span>
      </div>
      <div v-if="risingStatus=='0'" class="text-red-500 font-bold"> 
        <span class="float-left">{{ percentChange }}%</span>
        <span class="float-left ml-4">↓</span>
      </div>
      <!-- <span v-if="this.props.risingStatus=='1'" class="ml-4 float-left">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
      </span>
      <span v-else-if="this.props.risingStatus=='0'" class="ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </span> -->
      <span class="ml-4">{{ percentExplainer }}</span>
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
    title: String,
    statistic: String,
    percentChange: Number, 
    percentExplainer: String,
    risingStatus: Number,
  },
  components: {

  },
  created(){
    
  }
}
</script>
