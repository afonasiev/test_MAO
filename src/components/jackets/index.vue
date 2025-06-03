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
        :data="item"
        :class="[item.selected ? $style.selected : '']"
        @click.stop="toggleJacket(item)"
      />
    </template>
  </sectionUI>
</template>

<style module>
.selected {
  opacity: 0.2;
}
</style>
