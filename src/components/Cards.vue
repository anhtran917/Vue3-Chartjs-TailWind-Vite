<template>
    <div class="flex">
    <StatisticCard :carddata="carddata1"></StatisticCard>
    <StatisticCard :carddata="carddata2"></StatisticCard>
    <StatisticCard :carddata="carddata3"></StatisticCard>
    <StatisticCard :carddata="carddata4"></StatisticCard>
    </div>
</template>

<script lang="ts">
import StatisticCard from './StatisticCard.vue'
export default {
    data() {
        return {
            carddata1: {
                title: "Totla Revenue To Date" as string,
                statistic: "11.8m" as string,
                percentChange: 2.3 as Number,
                percentExplainer: "than last year" as string,
                risingStatus: 1 as Number,
            },
            carddata2: {
                title: "Current Month" as string,
                statistic: "5.5m" as string,
                percentChange: 2.1 as Number,
                percentExplainer: "than last month" as string,
                risingStatus: 1 as Number,
            },
            carddata3: {
                title: "New/Lost Locations" as string,
                statistic: "1554/1269" as string,
                percentChange: 1.8 as Number,
                percentExplainer: "than last year" as string,
                risingStatus: 0 as Number,
            },
            carddata4: {
                title: "Average SKU per Location" as string,
                statistic: "11.75" as string,
                percentChange: 1.3 as Number,
                percentExplainer: "than last year" as string,
                risingStatus: 1 as Number,
            },
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