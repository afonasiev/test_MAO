<script setup lang="ts">
import { useItemsStore } from '@/stores/items';
import Item from '@/components/item/index.vue';
import { storeToRefs } from 'pinia';

const useItems = useItemsStore();
const { toggleShoes } = useItems;
const { shoes, disabledShoes } = storeToRefs(useItems);
</script>

<template>
  <sectionUI>
    <template v-if="shoes && shoes.length > 0">
      <Item
        v-for="(item, index) in shoes"
        :key="index"
        :item="item"
        bottom
        :disabled="disabledShoes"
        @click.stop="toggleShoes(item)"
      />
    </template>
  </sectionUI>
</template>
