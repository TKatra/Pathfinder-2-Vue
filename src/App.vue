<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" src="./App.scss"></style>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <span>
          <RouterLink to="/">Home</RouterLink>
        </span>
        <span> / </span>
        <span>
          <RouterLink to="/about">About</RouterLink>
        </span>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>
