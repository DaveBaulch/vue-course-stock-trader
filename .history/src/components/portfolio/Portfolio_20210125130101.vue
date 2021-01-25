<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock" :key=
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters({ stocks: 'stockPortfolio' })
  },
  components: {
    appStock: Stock
  }
};
</script>
