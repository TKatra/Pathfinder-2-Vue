<script setup lang="ts">
import { ref } from 'vue';

const x = ref(3);
const y = ref(3);
const minValue = ref(0);
const maxValue = ref(1);

</script>

<template>
  <h3>Setup</h3>

  <div>
    <input type="number" v-model="x" min="3" max="100" />
    <input type="number" v-model="y" min="3" max="100" />
  </div>
  
  <div>
    <input type="number" v-model="minValue" min="0" :max="maxValue -1" />
    <input type="number" v-model="maxValue" :min="minValue +1" max="100" />
  </div>

  <p>{{ `${x} x ${y}` }}</p>
  <p>{{ `${minValue} - ${maxValue}` }}</p>

  <button>Start!</button>

</template>
