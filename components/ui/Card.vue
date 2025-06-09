<script setup lang="ts">
import {useAttrs} from 'vue'

const props = withDefaults(
    defineProps<{
      gradient?: boolean
    }>(),
    {
      gradient: false,
    }
)

const attrs = useAttrs()

const baseStyles = 'rounded-2xl p-4 shadow-sm'

const backgroundStyles = computed(() =>
    props.gradient
        ? 'text-white ' +
        'bg-[linear-gradient(125deg,_rgba(255,140,100,1)_0%,_rgba(255,136,97,1)_27%,_rgba(254,151,134,1)_49%,_rgba(232,142,166,1)_70%,_rgba(196,124,222,1)_90%)] '
        : 'bg-white'
)

const cardClasses = computed(() => {
  return [baseStyles, backgroundStyles.value, attrs.class ?? ''].join(' ')
})
</script>

<template>
  <div
      :class="cardClasses"
      v-bind="$attrs">
    <slot/>
  </div>
</template>
