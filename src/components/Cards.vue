<template>
    <div class="flex">
    <StatisticCard :carddata="carddata.carddata1"></StatisticCard>
    <StatisticCard :carddata="carddata.carddata2"></StatisticCard>
    <StatisticCard :carddata="carddata.carddata3"></StatisticCard>
    <StatisticCard :carddata="carddata.carddata4"></StatisticCard>
    </div>
</template>

<script lang="ts">
import StatisticCard from './StatisticCard.vue'
import jsonCard from '../assets/json_card.json'
export default {
    data() {
        return {
            carddata: jsonCard,
        }
    },
    props: {

    },
    components: {
        StatisticCard,
    },
    created(){

    }
}
</script>