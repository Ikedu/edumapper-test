<script setup lang="ts">
defineProps<{
  isUp?: boolean
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="transition-transform duration-300"
    :class="{ 'rotate-180': isUp }"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
</template>
