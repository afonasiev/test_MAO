<script setup lang="ts">
import changeThemes from '@/components/changeThemes/index.vue';
</script>

<template>
  <headerUI>
    <container :class="$style.body">
      <change-themes />
    </container>
  </headerUI>
</template>

<style module>
.body {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 0;
}
</style>
