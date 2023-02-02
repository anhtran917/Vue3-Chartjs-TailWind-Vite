<template>
  <tr>
    <td
        class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
    >{{ ChainID }}</td>
    <td
        class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
    >{{ ChainName }}</td>
    <td
        class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
    >{{ LocationCount }}</td>
    <td
        class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
    >{{ SWPDollars }}</td>
   
</tr>
</template>

<script lang="ts">
export default {
  name: 'MyTr',
  props: {
    ChainID: { required: true, type: String },
    ChainName: { required: true, type: String }, 
    LocationCount: { required: true, type: String },   
    SWPDollars: { required: true, type: String },   
  },
  
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
