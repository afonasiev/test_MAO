<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import Item from '@/components/item/index.vue';
import { storeToRefs } from 'pinia';

const useItems = useItemsStore();
const { toggleJacket } = useItems;
const { jackets } = storeToRefs(useItems);
</script>

<template>
  <sectionUI>
    <template v-if="jackets && jackets.length > 0">
      <Item
        v-for="(item, index) in jackets"
        :key="index"
        :item="item"
        bottom
        @click.stop="toggleJacket(item)"
      />
    </template>
  </sectionUI>
</template>
