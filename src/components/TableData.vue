<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="py-3 pl-2 float-left">
                <div class="relative flex rounded-md shadow-sm">
                    <label for="search" class="sr-only"> Search </label>
                    <input
                        type="text"
                        name="search"
                        class="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Search..."
                        v-model="searchText"
                        @keyup="searchTable()"
                    />
                    <button type="button" class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" @click="clearSearch()">Clear</button>
                    <div
                        class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="py-3 pl-2 float-right">
                <div class="relative max-w-xs">
                    <label for="select" class=""> Selection Mode: </label>
                    <select name="select">
                        <option value="0">Multi</option>
                        <option value="1">Single</option>
                        <option value="2">Range</option>
                    </select>
                </div>
            </div>

            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200" id="customers">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="flex items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                    @click="sortTable1()"
                                >
                                    Chain Id
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                    @click="sortTable2()"
                                >
                                    <span class="inline-flex items-center">
                                        Chain Name
                                    </span>
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                    @click="sortTable3()"
                                >
                                    <span class="inline-flex items-center">
                                        Location Count
                                    </span>
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                    @click="sortTable4()"
                                >
                                    <span class="inline-flex items-center">
                                        SWP Dollars
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="item in items" :key="item.ChainID" class="divide-y divide-gray-200">
                            <MyTr :ChainID="item.ChainID" :ChainName="item.ChainName" :LocationCount="item.LocationCount" :SWPDollars= "item.SWPDollars"></MyTr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MyTr from './MyTr.vue'
import jsonTableData from '../assets/json_table.json'
export default {
  name: "TableData",
  props: {

  },
  data() {
    return {
      items: [
        {
            ChainID: "" as string,
            ChainName: "" as string,
            LocationCount: 0 as Number,
            SWPDollars: 0 as Number,
        }
      ],
      searched_items: [
        {
            ChainID: "" as string,
            ChainName: "" as string,
            LocationCount: 0 as Number,
            SWPDollars: 0 as Number,
        }
      ],
      jsonTable: jsonTableData,
      tableData1: [],
      searchText: "",
      sortKey: 0,
    }
  },
  components: {
    MyTr,
  },
  created(){
    this.initTable();
    // this.searchTable();
  },
  methods: {
        initTable(){
            this.items=[];
            for(var i=0;i<this.jsonTable.length;i++){
                this.items.push({
                    ChainID: jsonTableData[i]['Chain ID'],
                    ChainName: jsonTableData[i]['Chain Name'],
                    LocationCount: jsonTableData[i]['SWP Dollars'],
                    SWPDollars: jsonTableData[i]['SWP Dollars'],
                });
            }
        },
        searchTable(){
            this.initTable();
            const key = this.searchText;
            this.searched_items = this.items.filter(function(item) {
                return item.ChainName.toUpperCase().includes(key.toUpperCase()) || item.ChainID.toUpperCase().includes(key.toUpperCase());
            });
            this.items = this.searched_items;
        },
        sortTable1() {
            if(this.sortKey==0){
                this.items.sort(function (x, y) {
                let a = x.ChainID.toUpperCase(),
                b = y.ChainID.toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
            this.sortKey = 1;
            } else {
                this.items.reverse();
                this.sortKey = 0;
            }
        },
        sortTable2() {
            if(this.sortKey==0){
                this.items.sort(function (x, y) {
                let a = x.ChainName.toUpperCase(),
                b = y.ChainName.toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
            this.sortKey = 1;
            } else {
                this.items.reverse();
                this.sortKey = 0;
            }
        },
        sortTable3() {
            if(this.sortKey==0){
                this.items.sort(function (x, y) {
                return x.LocationCount - y.LocationCount;
            });
            this.sortKey = 1;
            } else {
                this.items.reverse();
                this.sortKey = 0;
            }
        },
        sortTable4() {
            if(this.sortKey==0){
                this.items.sort(function (x, y) {
                return x.SWPDollars - y.SWPDollars;
            });
            this.sortKey = 1;
            } else {
                this.items.reverse();
                this.sortKey = 0;
            }
        },
        clearSearch(){
            document.location.reload();
        },
    },
  }

</script>
<style>
    #customers tbody tr:hover {
        background-color: #ddd;
    }
    #customers tr:nth-child(even){
        background-color: #f2f2f2;
    }
</style>