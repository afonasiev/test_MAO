<script setup lang="ts">
import type { Props } from '@/components/ui/icons/types';
import { computed, defineAsyncComponent } from 'vue';

const { icon } = defineProps<Props>();
const model = defineModel<Props>();

const dynamicComponent = computed(() => {
  console.log(icon);
  return defineAsyncComponent(() => import(`@/components/ui/icons/svg/${icon}.vue`));
});
</script>

<template>
  <Suspense>
    <template #default>
      <component :is="dynamicComponent" />
    </template>
  </Suspense>
</template>
