<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import Item from '@/components/item/index.vue';
import { storeToRefs } from 'pinia';

const useItems = useItemsStore();
const { toggleJacket } = useItems;
const { jacketSelected } = storeToRefs(useItems);
</script>

<template>
  <sectionUI>
    <template v-if="jacketSelected">
      <Item :data="jacketSelected" @click.stop="toggleJacket(jacketSelected)" />
    </template>
  </sectionUI>
</template>

<style module></style>
