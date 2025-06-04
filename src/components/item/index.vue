<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import type { Props } from '@/components/item/types';

const { item, bottom = false, disabled = false } = defineProps<Props>();
const $style = useCssModule();

const classSelected = computed(() => (item.selected && bottom ? $style.selected : ''));
const classDisabled = computed(() => (bottom && disabled && !item.selected ? $style.disabled : ''));
</script>

<template>
  <div :class="[$style.body, classSelected, classDisabled]">
    <span :class="$style.id">{{ item.id }}</span>
    <h4 :class="$style.heading">{{ item.name }}</h4>
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
.selected {
  opacity: 0.2;
}
.disabled {
  cursor: not-allowed;
}
</style>
