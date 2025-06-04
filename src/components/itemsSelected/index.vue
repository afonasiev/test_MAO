<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import Item from '@/components/item/index.vue';
import { storeToRefs } from 'pinia';

const useItems = useItemsStore();
const { toggleShoes } = useItems;
const { shoesSelected } = storeToRefs(useItems);
</script>

<template>
  <sectionUI>
    <template v-if="shoesSelected.length > 0">
      <Item
        v-for="(item, index) in shoesSelected"
        :key="index"
        :item="item"
        @click.stop="toggleShoes(item)"
      />
    </template>
  </sectionUI>
</template>
