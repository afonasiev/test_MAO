<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useItemsStore } from '@/stores/items';
import Shoes from './components/shoes/index.vue';
import Header from './components/header/index.vue';
import Jackets from './components/jackets/index.vue';
import ItemsSelected from './components/itemsSelected/index.vue';
import ItemSelected from './components/itemSelected/index.vue';

const useItems = useItemsStore();
const { getShoes, getJackets } = useItems;

onBeforeMount(async () => {
  await getShoes();
  await getJackets();
});
</script>

<template>
  <Header />
  <main>
    <container>
      <div :class="$style.top">
        <items-selected />
        <item-selected />
      </div>
      <div :class="$style.bottom">
        <shoes />
        <jackets />
      </div>
    </container>
  </main>
</template>

<style module>
.top {
  display: flex;
  gap: 16px;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-height: 132px;
}
.bottom {
  display: flex;
  gap: 16px;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>
