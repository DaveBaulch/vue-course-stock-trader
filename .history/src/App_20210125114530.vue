<template>
  <div class="container">
    <app-header></app-header>
    <div 
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
