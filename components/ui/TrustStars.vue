<script lang="ts" setup>
const props = withDefaults(defineProps<{
  confidenceIndex: number
  maxStars?: number
}>(), {
  maxStars: 5,
})

const stars = computed(() =>
    Array.from({length: props.maxStars}, (_, i) => i < props.confidenceIndex)
)
</script>

<template>
  <div class="flex items-center gap-1 text-lg">
    <Star
        v-for="(active, i) in stars"
        :key="i"
        :class="{ 'opacity-30': !active }"
        class="h-3 w-3 text-[#3890FA]"
    />
  </div>
</template>
