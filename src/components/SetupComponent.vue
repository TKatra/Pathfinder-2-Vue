<script setup lang="ts">
import type { GameOptions } from '@/shared/interfaces/gameOptions.interface';
import { ref, defineEmits } from 'vue';

const x = ref(3);
const y = ref(3);
const minValue = ref(0);
const maxValue = ref(1);

const emit = defineEmits<{
  (event: 'startGame', gameOptions: GameOptions): void
}>();

function startGame () {
  const gameOptions = {
    x: x.value,
    y: y.value,
    minValue: minValue.value,
    maxValue: maxValue.value
  } as GameOptions;

  emit('startGame', gameOptions);
}

</script>

<template>
  <h3>Setup</h3>

  <div class="d-flex justify-content-between mt-3">
    <div class="col-5">
      <label>Width</label>
      <input type="number"
            class="col-12"
            v-model="x"
            min="3"
            max="100" />
    </div>

    <div class="col-5">
      <label>Height</label>
      <input type="number"
            class="col-12"
            v-model="y"
            min="3"
            max="100" />
    </div>  
  </div>

  <div class="d-flex justify-content-between mt-3">
    <div class="col-5">
      <label>Maximum value</label>
      <input type="number"
            class="col-12"
            v-model="maxValue"
            :min="minValue +1"
            max="100" />
    </div>

    <div class="col-5">
      <label>Minimum value</label>
      <input type="number"
            class="col-12"
            v-model="minValue"
            min="0"
            :max="maxValue -1" />
    </div>
  </div>

  <button class="btn btn-primary mt-3"
          @click="startGame">
    Start!
  </button>

</template>
