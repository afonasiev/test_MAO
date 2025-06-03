<script setup lang="ts"></script>

<template>
  <header :class="$style.header"><slot /></header>
</template>

<style module>
.header {
  width: 100%;
}
</style>
