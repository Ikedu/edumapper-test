<script lang="ts" setup>
const props = withDefaults(defineProps<{
  value: number
  color: string
  segments?: number
}>(), {
  segments: 5,
})

const score = computed(() => {
  const filled = Math.floor((props.value / 100) * props.segments)
  return Array.from({length: props.segments}, (_, index) => index < filled)
})
</script>

<template>
  <div class="flex gap-1">
    <div
        v-for="(isFilled, index) in score"
        :key="index"
        class="flex-1 h-2 rounded-full overflow-hidden relative"
    >
      <div
          :class="`${color}/10`"
          class="absolute inset-0 h-full w-full rounded-full"
      />
      <div
          v-if="isFilled"
          :class="color"
          class="absolute inset-0 h-full w-full rounded-full transition-all duration-300"
      />
    </div>
  </div>
</template>
