<template>
  <button @click="increment">Increment Count</button>
  <h2>{{ count }}</h2>
</template>

<script setup lang="ts">
ref: count = 0

function increment() {
  count += 1
}
</script>
