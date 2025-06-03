<script setup lang="ts"></script>

<template>
  <section :class="$style.section"><slot /></section>
</template>

<style module>
.section {
  width: 100%;
  display: flex;
  gap: 16px;
  flex-basis: calc(50% - 16px);
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
}
</style>
