<template>
    <div class="flex">
    <StatisticCard title="Totla Revenue To Date" statistic="11.8m" :percent-change=2.3 percent-explainer="than last year" :rising-status=1></StatisticCard>
    <StatisticCard title="Current Month" statistic="5.5m" :percent-change=2.1 percent-explainer="than last month" :rising-status=1></StatisticCard>
    <StatisticCard title="Totla Revenue To Date" statistic="1554/1269" :percent-change=1.8 percent-explainer="than last year" :rising-status=0></StatisticCard>
    <StatisticCard title="Totla Revenue To Date" statistic="11.75" :percent-change=1.3 percent-explainer="than last year" :rising-status=1></StatisticCard>
    </div>
</template>

<script lang="ts">
import StatisticCard from './StatisticCard.vue'
export default {
    data: () => ({

    }),
    props: {

    },
    components: {
        StatisticCard,
    },
    created(){

    }
}
</script>