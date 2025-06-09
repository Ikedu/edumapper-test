<script lang="ts" setup>
import * as yup from 'yup'
import Card from '@/components/ui/Card.vue'
import Pencil from '@/components/icons/Pencil.vue'
import Close from '@/components/icons/Close.vue'
import Button from '@/components/ui/Button.vue'

export type FormData = Record<string, unknown>

const props = withDefaults(defineProps<{
  title: string
  expandedTitle?: string
  toCompleteLabel?: string
  disabled?: boolean
}>(), {
  expandedTitle: '',
  toCompleteLabel: 'À compléter',
  disabled: false
})

const schema = yup.object({
  className: yup.string().required(),
  classType: yup.string().required()
})

const isExpanded = ref(false)
const data = ref<FormData>({})

const isSelectionValid = computed(() => {
  try {
    schema.validateSync(data.value)
    return true
  } catch {
    return false
  }
})
const validForm = computed(() => isSelectionValid.value)

const displayValue = computed(() => {
  if (!isSelectionValid.value) return props.toCompleteLabel
  return `${data.value.className} ${data.value.classType}`
})

const toggleExpansion = () => {
  if (props.disabled) return
  isExpanded.value ? cancelEdit() : openEdit()
}

const openEdit = () => {
  isExpanded.value = true
}

const cancelEdit = () => {
  isExpanded.value = false
}

const validate = () => {
  if (!validForm.value) return
  cancelEdit()
}

const updateData = (newData: Partial<FormData>) => {
  data.value = {...data.value, ...newData}
}
</script>

<template>
  <Card :class="{ 'opacity-60 pointer-events-none': props.disabled }">
    <div class="flex justify-between items-center">
      <h3
          :class="{'text-xl': isExpanded, 'text-sm text-[#646A81]': !isExpanded,
          'font-light': !isExpanded && displayValue !== toCompleteLabel}"
          class="transition-all duration-300 text-black font-bold"
      >
        {{ isExpanded && props.expandedTitle ? props.expandedTitle : props.title }}
      </h3>

      <button v-if="!isExpanded && !props.disabled" @click="toggleExpansion">
        <Pencil class="w-4 h-4"/>
      </button>
      <button v-if="isExpanded" @click="toggleExpansion">
        <Close class="w-4 h-4"/>
      </button>
    </div>

    <div v-if="!isExpanded" class="mt-2">
      <p
          :class="{'text-gray-900': isSelectionValid, 'text-gray-400 italic': !isSelectionValid,
          'font-bold': displayValue !== toCompleteLabel,
          'font-thin': displayValue === toCompleteLabel}"
          class="text-sm text-[#646A81] transition-colors duration-300"
      >
        {{ displayValue }}
      </p>
    </div>

    <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="max-h-0 opacity-0 scale-95"
        enter-to-class="max-h-screen opacity-100 scale-100"
        leave-active-class="transition-all duration-400 ease-out"
        leave-from-class="max-h-screen opacity-100 scale-100"
        leave-to-class="max-h-0 opacity-0 scale-95"
    >
      <div v-if="isExpanded" class="overflow-hidden">
        <slot
            :data="data"
            :is-valid="isSelectionValid"
            :update-data="updateData"
        />

        <div class="flex gap-3 mt-6">
          <Button
              :disabled="!validForm"
              :variant="validForm ? 'black' : 'secondary'"
              class="w-full transition-all duration-300"
              @click="validate"
          >
            Confirmer
          </Button>
        </div>
      </div>
    </Transition>
  </Card>
</template>
