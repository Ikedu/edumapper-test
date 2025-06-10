<script lang="ts" setup>
const props = withDefaults(defineProps<{
  value: number
  bgColor: string
  barColor: string
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
        class="flex-1 h-[12px] rounded-full overflow-hidden relative"
    >
      <div
          :class="bgColor"
          class="absolute inset-0 h-full w-full rounded-full"
      />
      <div
          v-if="isFilled"
          :class="barColor"
          class="absolute inset-0 h-full w-full rounded-full transition-all duration-300"
      />
    </div>
  </div>
</template>
