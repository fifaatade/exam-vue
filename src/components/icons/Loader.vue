<script setup lang="ts">

</script>

<style scoped>

.loader {
  width: 20px;
  height: 20px;
  border: 3px solid #ddd;
  border-radius: 50%;
  animation: loader 1s infinite linear;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

<template>
    <div class="loader">
        <div></div>
    </div>
  </template>