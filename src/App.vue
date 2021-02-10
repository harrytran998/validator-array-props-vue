<template>
  <div style="text-align: center">
    <h1>Các loại bánh truyền thống ở Việt Nam</h1>
    <!-- <VietnameseCake :cake="Cake.XXX" /> -->
    <VietnameseCake :cake="Cake.BanhChung" />
  </div>
</template>

<script setup lang="ts">
import { Cake } from './types'
</script>
