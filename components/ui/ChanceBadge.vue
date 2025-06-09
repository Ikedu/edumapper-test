<script lang="ts" setup>
import {CHANCES_LEVELS} from '~/data/constants'

type ChanceLevelType = keyof typeof CHANCES_LEVELS

const props = defineProps<{
  level: ChanceLevelType
}>()

const levelInfo = computed(() => CHANCES_LEVELS[props.level])

const emojiMap: Record<ChanceLevelType, string> = {
  VERY_HIGH: '⚡',
  HIGH: '👍',
  MEDIUM: '🫤',
  LOW: '🫣',
}

const emoji = computed(() => emojiMap[props.level])
</script>

<template>
  <div
      :class="[levelInfo.color, levelInfo.textColor, 'bg-opacity-10']"
      class="inline-flex items-center rounded-full px-2 py-1 text-sm font-semibold"
  >
    {{ levelInfo.label }} {{ emoji }}
  </div>
</template>
