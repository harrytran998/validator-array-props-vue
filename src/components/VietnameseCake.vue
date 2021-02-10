<script setup lang="ts">
import { defineProps } from 'vue'
import { Cake } from '../types'
import { validatorStringType } from '../helpers/validatorStringType'

const { cake } = defineProps({
  cake: {
    type: String,
    validator: validatorStringType(['Bánh Chưng', 'Bánh Giầy', 'Bánh Tét']).for('cake'),
  },
})
</script>

<template>
  <h2 v-if="cake === Cake.BanhChung">Bánh Chưng đỉnh cao</h2>
  <h3 v-else-if="cake === Cake.BanhGiay">Bánh Giầy thơm ngon</h3>
  <h4 v-else>Bánh gì đây nhỉ</h4>
</template>
