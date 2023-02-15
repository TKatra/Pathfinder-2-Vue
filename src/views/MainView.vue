<script setup lang="ts">
import SetupComponent from '@/components/SetupComponent.vue';
import type { GameOptions } from '@/shared/interfaces/gameOptions.interface';

function startNewGame(gameOptions: GameOptions) {
  console.log(gameOptions);
}

</script>

<template>
  <div class="container">
    <h2>Main</h2>
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-6">
        <SetupComponent @start-game="startNewGame"/>
      </div>
    </div>
  </div>
</template>
