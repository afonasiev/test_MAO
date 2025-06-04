<script setup lang="ts">
import changeThemes from '@/components/changeThemes/index.vue';
</script>

<template>
  <headerUI>
    <container :class="$style.body">
      <a :class="$style.logo">
        <icons icon="logo" />
      </a>
      <change-themes />
    </container>
  </headerUI>
</template>

<style module>
.body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}
.logo {
  width: 25px;
}
</style>
