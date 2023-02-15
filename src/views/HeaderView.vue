<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div>
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
</template>
