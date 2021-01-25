<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './compnents/Header.vue';
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style></style>
