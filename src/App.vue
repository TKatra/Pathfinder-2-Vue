<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import HeaderView from './views/HeaderView.vue';
</script>

<style lang="scss" src="./styles/App.scss"></style>

<template>
  <HeaderView />

  <main>
    <RouterView />
  </main>
</template>
