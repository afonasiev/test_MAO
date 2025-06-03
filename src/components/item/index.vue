<script setup lang="ts">
import type { itemShoes } from '@/stores/items/types';

defineProps<{
  data: itemShoes;
}>();
</script>

<template>
  <div :class="$style.body">
    <span :class="$style.id">{{ data.id }}</span>
    <h4 :class="$style.heading">{{ data.name }}</h4>
  </div>
</template>

<style module>
.body {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in;
  will-change: opacity;
  background-color: var(--color-background-item);
  &:hover {
    opacity: 0.5;
  }
}
.id {
  position: absolute;
  left: 5%;
  top: 5%;
  font-size: 10px;
  line-height: 1;
}
.heading {
  line-height: 1;
}
</style>
