<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';

const useSettings = useSettingsStore();
const { theme } = storeToRefs(useSettings);
const { changeTheme, setupTheme, isSystemDark } = useSettings;

onBeforeMount(() => {
  if (isSystemDark()) {
    setupTheme('dark');
  }
});
</script>

<template>
  <button :class="$style.switch" @click.stop="changeTheme">
    <icons :icon="theme === 'dark' ? 'light' : 'dark'" />
  </button>
</template>

<style module>
.switch {
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.switch svg {
  height: 100%;
  width: auto;
}
</style>
