<script lang="ts" setup>
import {computed} from 'vue'
import Spinner from "~/components/icons/Spinner.vue";

const props = withDefaults(
    defineProps<{
      variant?: 'primary' | 'secondary' | 'outline' | 'base' | 'grey' | 'black'
      size?: 'sm' | 'md' | 'lg'
      type?: 'button' | 'submit' | 'reset'
      disabled?: boolean
      loading?: boolean
      class?: string
    }>(),
    {
      variant: 'primary',
      size: 'md',
      type: 'button',
      disabled: false,
      loading: false,
      class: '',
    }
)

const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors cursor-pointer ' +
    'focus:outline-none focus:ring-0 disabled:opacity-60 disabled:cursor-not-allowed'

const variantClasses: Record<string, string> = {
  primary: 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500',
  secondary:
      "bg-transparent text-black  border border-[#646A81] disabled:bg-gray-50",
  outline:
      'border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-600',
  ghost: 'bg-[#f7f3f0] text-black hover:bg-[#eae6e3]',
  base: 'bg-white text-black hover:bg-gray-100',
  black: 'bg-black text-white hover:bg-black/90',
  grey: "bg-[#f7f3f0] text-black  disabled:bg-gray-100 disabled:text-gray-400",

}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const buttonClasses = computed(() => {
  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.class,
  ]
      .filter(Boolean)
      .join(' ')
})

defineOptions({
  inheritAttrs: true,
})
</script>

<template>
  <button
      :aria-disabled="props.disabled || props.loading"
      :class="buttonClasses"
      :disabled="props.disabled || props.loading"
      :type="props.type"
  >
    <div class="flex items-center justify-center gap-2 w-full h-full">
      <template v-if="props.loading">
        <Spinner/>
      </template>
      <template v-else>
        <slot name="icon"/>
      </template>
      <slot/>
    </div>
  </button>
</template>