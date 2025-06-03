<script setup lang="ts"></script>

<template>
  <header :class="$style.footer"><slot /></header>
</template>

<style module>
.footer {
  width: 100%;
}
</style>
