<template>
  <div class="flex col-sm-12">
    <div class="col-sm-4">
      <div>Slice:</div>
      <select v-model="selected" class="border" :on-select="onSelectChange()">
        <option v-for="opt in selectOption" :key="opt">{{ opt }}</option>
      </select>
      <span class="m-2"></span>
    </div>
    <div class="col-sm-4">
      <div>in:</div>
      <select class="border">
        <option v-for="opt in selectPayOption" :key="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="col-sm-4">
      <button class="ml-10 relative inline-flex items-center px-4 overflow-hidden text-sm font-medium text-Cyan-900 border-b-4 border-blue-700 hover:border-blue-500 rounded hover:text-white group bg-blue-500 hover:bg-blue-400" @click="onReset">
          Reset
      </button>
    </div>
  </div>
  <div id="button_group" ref="list" class="sm-12" style="text-align: center;">
    <ul class="flex sm-6">
      <li v-for="item in items" :key="item.id">
        <my-button
          :label="item.label"
          :id="item.id"
          :done="item.done"
          @item-deleted="deleteItem(item.id)"
          >
        </my-button>
      </li>
    </ul>
  </div>
  <div class="flex mt-10 sm-6">
    <div class="chart-container" style="position: relative; height:60vh; width:100%">
      <Doughnut id="doughnut" ref="chartRef" :data="chartData" :options="chartConfig.options" @click="onClick" />
    </div>
    <div class="chart-container" style="position: relative; height:60vh; width:100%">
      <Pie id="pie" :data="chartData" :options="chartConfig.options" @click="onClickPie"/>
    </div>
  </div>
</template>


<script lang="ts">
import { ref } from 'vue'
import uniqueId from 'lodash.uniqueid';
import MyButton from './MyButton.vue'
import { Chart , ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie,Doughnut ,getElementAtEvent,ChartComponentRef} from 'vue-chartjs'
import * as chartConfig from '../ts/chatConfig'
import jsonSpecies from '../assets/json_species.json'
import jsonBrand from '../assets/json_brand.json'
import jsonSubBrand from '../assets/json_subbrand.json'
import jsonFormula from '../assets/json_formula.json'
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend,ChartDataLabels)
//type of MyButton;
export default {
  name: 'DrilldownChart',
  components: {
    Doughnut,
    Pie,
    Chart,
    MyButton,
  },
  data() {
    return {
      items: [],
      new_item: {},
      selectOption:[
        'species',
        'brand',
        'subbrand',
        'formula',
      ],
      selectPayOption:[
        'Cust Dollars',
        'SWP Dollars',
        'SRP Dollars',
        'Net Weight',
        'Unit Count',
        'POS Dollars',
        'DTS Dollars',
        'DTS Units',
        'MAP Dollars',
        'Unit Velocity',
        'DPP Dollars',
        'Location Count',
      ],
      selected:'species',
      jsonSpecies:jsonSpecies,
      jsonBrand:jsonBrand,
      jsonSubBrand:jsonSubBrand,
      jsonFormula:jsonFormula,
      chartConfig:chartConfig,
      children: [] as any[],
      curBtnLabel:'',
      chartData: {
        species:"",
        type:"",
        labels: [] as string[],
        datasets: [
          {
            backgroundColor: [] as string[],
            data: [] as number[],
          }
        ],
      },
      chartData1: {
        species:"",
        type:"species",
        labels: [] as string[],
        datasets: [
          {
            backgroundColor: [] as string[],
            data: [] as number[],
          }
        ],
      },
      chartData2: {
        species:"",
        type:"brand",
        labels: [] as string[],
        datasets: [
          {
            backgroundColor: [] as string[],
            data: [] as number[],
          }
        ],
      },
      chartData3: {
        species:"",
        type:"subbrand",
        labels: [] as string[],
        datasets: [
          {
            backgroundColor: [] as string[],
            data: [] as number[],
          }
        ],
      },
      chartData4: {
        species:"",
        type:"formula",
        labels: [] as string[],
        datasets: [
          {
            backgroundColor: [] as string[],
            data: [] as number[],
          }
        ],
      },
    }
  },
 
  created() {
    this.fillData();
    this.chartData=this.chartData1;
    
  },
 
  methods: {
    onSelectChange(){
      if(this.selected == "species")
        this.chartData=this.chartData1;
      else if(this.selected == "brand"){
        this.chartData=this.chartData2;
        if (!this.chartData2.species) {
          this.fillDataBrandAll();
          this.chartData=this.chartData2;
        }
      }
      else if(this.selected == "subbrand"){
        this.chartData=this.chartData3;
        if (!this.chartData3.species) {
          this.fillDataSubBrandAll();
          this.chartData=this.chartData3;
        }
      }
      else if(this.selected == "formula"){
        this.chartData=this.chartData4;
        if (!this.chartData3.species) {
          this.fillDataFormulaAll();
          this.chartData=this.chartData4;
        }
      }
    },
    deleteItem(itemId:any) {
      const itemIndex = this.items.findIndex((item) => item.id === itemId);
      let done=this.items[itemIndex].done;
      
      if(done == "species"){
        this.selected="species";
      }
      else if(done == "brand"){
        this.selected="brand";
      }else if(done == "subbrand"){
        this.selected="subbrand";
      }else if(done == "formula"){
        this.selected="formula";
      }    
        
    },
    addItem(itemLabel:any,itemDone:any) {
      if(this.items.length==0){
        this.items.push({
            id: uniqueId("chart-"),
            label: itemLabel,
            done: itemDone,
          });
      } else {
        for(var i=0;i<this.items.length;i++){
        if(this.items[i].done == itemDone){
          this.new_item={
            id: uniqueId("chart-"),
            label: itemLabel,
            done: itemDone,
          };
          this.items.splice(i,1, this.new_item);
        } else {
          this.new_item={
            id: uniqueId("chart-"),
            label: itemLabel,
            done: itemDone,
          };
          if(itemDone=="species") this.items.splice(0,4, this.new_item);
          if(itemDone=="brand") this.items.splice(1,3, this.new_item);
          if(itemDone=="subbrand") this.items.splice(2,2, this.new_item);
          else if(itemDone=="formula") this.items.splice(3,1, this.new_item);
        }
      }
    }
    },
    fillDataBrand(itemType:any) {
     this.chartData2.labels=[];
     this.chartData2.datasets[0].data=[];
     this.chartData2.datasets[0].backgroundColor=[];
     this.chartData2.species=itemType;
      for(var i=0; i < this.jsonBrand[itemType]['brand'].length; i++){
        this.chartData2.labels.push(this.jsonBrand[itemType]['brand'][i].name);
        this.chartData2.datasets[0].data[i]=this.jsonBrand[itemType]['brand'][i].value;
        this.chartData2.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
    },
    fillDataSubBrand(itemType:any) {
     this.chartData3.labels=[];
     this.chartData3.datasets[0].data=[];
     this.chartData3.datasets[0].backgroundColor=[];
     this.chartData3.species=itemType;
      for(var i=0; i < this.jsonSubBrand[itemType]['subbrand'].length; i++){
        this.chartData3.labels.push(this.jsonSubBrand[itemType]['subbrand'][i].name);
        this.chartData3.datasets[0].data[i]=this.jsonSubBrand[itemType]['subbrand'][i].value;
        this.chartData3.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
    },
    fillDataFormula(itemType:any) {
     this.chartData4.labels=[];
     this.chartData4.datasets[0].data=[];
     this.chartData4.datasets[0].backgroundColor=[];
     this.chartData4.species=itemType;
      for(var i=0; i < this.jsonFormula[itemType]['formula'].length; i++){
        this.chartData4.labels.push(this.jsonFormula[itemType]['formula'][i].name);
        this.chartData4.datasets[0].data[i]=this.jsonFormula[itemType]['formula'][i].value;
        this.chartData4.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
    },
    fillDataBrandAll() {
     this.chartData2.labels=[];
     this.chartData2.datasets[0].data=[];
     this.chartData2.datasets[0].backgroundColor=[];
     let itemType="dog";
     
      for(var i=0; i < this.jsonBrand[itemType]['brand'].length; i++){
        this.chartData2.labels.push(this.jsonBrand[itemType]['brand'][i].name);
        this.chartData2.datasets[0].data[i]=this.jsonBrand[itemType]['brand'][i].value;
        this.chartData2.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      itemType="cat";
      for(var i=0; i < this.jsonBrand[itemType]['brand'].length; i++){
        this.chartData2.labels.push(this.jsonBrand[itemType]['brand'][i].name);
        this.chartData2.datasets[0].data[i]=this.jsonBrand[itemType]['brand'][i].value;
        this.chartData2.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      itemType="other";
      for(var i=0; i < this.jsonBrand[itemType]['brand'].length; i++){
        this.chartData2.labels.push(this.jsonBrand[itemType]['brand'][i].name);
        this.chartData2.datasets[0].data[i]=this.jsonBrand[itemType]['brand'][i].value;
        this.chartData2.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      this.chartData2.species="all";
    },
    fillDataSubBrandAll() {
     this.chartData3.labels=[];
     this.chartData3.datasets[0].data=[];
     this.chartData3.datasets[0].backgroundColor=[];
     let itemType="dog";
     this.chartData3.species=itemType;
      for(var i=0; i < this.jsonSubBrand[itemType]['subbrand'].length; i++){
        this.chartData3.labels.push(this.jsonSubBrand[itemType]['subbrand'][i].name);
        this.chartData3.datasets[0].data[i]=this.jsonSubBrand[itemType]['subbrand'][i].value;
        this.chartData3.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      itemType="cat";
      for(var i=0; i < this.jsonSubBrand[itemType]['subbrand'].length; i++){
        this.chartData3.labels.push(this.jsonSubBrand[itemType]['subbrand'][i].name);
        this.chartData3.datasets[0].data[i]=this.jsonSubBrand[itemType]['subbrand'][i].value;
        this.chartData3.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      itemType="other";
      for(var i=0; i < this.jsonSubBrand[itemType]['subbrand'].length; i++){
        this.chartData3.labels.push(this.jsonSubBrand[itemType]['subbrand'][i].name);
        this.chartData3.datasets[0].data[i]=this.jsonSubBrand[itemType]['subbrand'][i].value;
        this.chartData3.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      this.chartData3.species="all";
    },
    fillDataFormulaAll() {
     this.chartData4.labels=[];
     this.chartData4.datasets[0].data=[];
     this.chartData4.datasets[0].backgroundColor=[];
     let itemType="dog";
     
      for(var i=0; i < this.jsonFormula[itemType]['formula'].length; i++){
        this.chartData4.labels.push(this.jsonFormula[itemType]['formula'][i].name);
        this.chartData4.datasets[0].data[i]=this.jsonFormula[itemType]['formula'][i].value;
        this.chartData4.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      itemType="cat";
      for(var i=0; i < this.jsonFormula[itemType]['formula'].length; i++){
        this.chartData4.labels.push(this.jsonFormula[itemType]['formula'][i].name);
        this.chartData4.datasets[0].data[i]=this.jsonFormula[itemType]['formula'][i].value;
        this.chartData4.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      itemType="other";
      for(var i=0; i < this.jsonFormula[itemType]['formula'].length; i++){
        this.chartData4.labels.push(this.jsonFormula[itemType]['formula'][i].name);
        this.chartData4.datasets[0].data[i]=this.jsonFormula[itemType]['formula'][i].value;
        this.chartData4.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      this.chartData4.species="all";
    },
    fillData() {
      this.chartData1.species='';
      for(var i=0; i < this.jsonSpecies.length; i++){
        this.chartData1.labels.push(this.jsonSpecies[i].name);
        this.chartData1.datasets[0].data[i]=this.jsonSpecies[i].value;
        this.chartData1.datasets[0].backgroundColor[i]='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
    },
   
    onClick(event: MouseEvent) {
   
      const chart = (this.$refs.chartRef as any).chart;
   
      this.elementAtEvent(getElementAtEvent(chart, event));
      
    },
    onClickPie(event: MouseEvent) {
 
      const chart = (this.$refs.chartRef as any).chart;
   
      this.elementAtEvent(getElementAtEvent(chart, event));
    
    },
    elementAtEvent(element: any[]){
      if (!element.length) return;
      const { datasetIndex, index } = element[0];
      this.curBtnLabel=this.chartData.labels[index];
      
      this.selected=this.chartData.type;
      this.addItem(this.chartData.labels[index],this.chartData.type); 
      
      if(this.chartData.type == "species"){
        this.chartData.species=this.chartData.labels[index];  
        this.fillDataBrand(this.chartData.species);
        this.chartData=this.chartData2;
        this.selected="brand";
      }  
      else if(this.chartData.type == "brand"){
        this.fillDataSubBrand(this.chartData.species);
        this.chartData=this.chartData3;
        this.selected="subbrand";
      }  
      else if(this.chartData.type == "subbrand"){
        this.fillDataFormula(this.chartData.species);
        this.chartData=this.chartData4;
        this.selected="formula";
      }
      //this.addButton(this.chartData.labels[index]);   
      
    },
    onReset() {
      this.selected="species";
      this.items=[];
      this.chartData1.species="";
      this.chartData2.species="";
      this.chartData3.species="";
      this.chartData4.species="";
    },

  }
}
</script>
<style>

</style>