<script lang="ts" setup>
import {CHANCES_LEVELS} from '@/data/constants'
import type {ChanceLevelType} from "@/types/ChanceLevel";

import Close from '@/components/icons/Close.vue'
import Pin from '@/components/icons/Pin.vue'
import Chevron from '@/components/icons/Chevron.vue'
import TrustStars from '@/components/ui/TrustStars.vue'
import ChanceBadge from '@/components/ui/ChanceBadge.vue'
import StatusScore from '@/components/ui/StatusScore.vue'

const props = withDefaults(defineProps<{
  school: string
  location: string
  result: string
  chanceLevel: ChanceLevelType
  statusValue: number
  confidenceIndex?: number
  moreInfo?: string
}>(), {
  confidenceIndex: 0,
  moreInfo: ''
})

const emit = defineEmits<{
  remove: []
}>()

const expanded = ref(false)

const toggleExpanded = () => {
  expanded.value = !expanded.value
}

const chanceLevelBarColor = computed(() => CHANCES_LEVELS[props.chanceLevel].barColor)
const chanceLevelColor = computed(() => CHANCES_LEVELS[props.chanceLevel].color)
</script>

<template>
  <div class="bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300 transform hover:shadow-md">
    <div class="p-px">
      <div class="p-4 flex justify-between items-start rounded-t-3xl bg-[#F7F3F0]">
        <div class="space-y-1">
          <div class="flex items-center gap-[2px] divide-x divide-[#646A81] text-[#646A81] text-sm">
            <span class="font-medium uppercase pr-2">{{ school }}</span>
            <div class="flex items-center pl-2">
              <Pin class="w-3 h-3 mr-1"/>
              {{ location }}
            </div>
          </div>
          <h3 class="mt-2 text-xl font-semibold text-black">{{ result }}</h3>
        </div>

        <button
            class="text-gray-400 hover:text-gray-600 transition-transform duration-200 hover:scale-110 active:scale-90"
            @click="emit('remove')"
        >
          <Close class="w-4 h-4 stroke-4"/>
        </button>
      </div>

      <div class="p-4 space-y-4">
        <div class="flex justify-between items-center">
          <span class="font-medium">Mes chances</span>
          <ChanceBadge :level="chanceLevel"/>
        </div>

        <StatusScore :bar-color="chanceLevelBarColor" :bg-color="chanceLevelColor" :value="statusValue"/>
        <button
            class="flex items-center text-black text-sm font-medium transition-transform duration-200"
            @click="toggleExpanded"
        >
          {{ expanded ? 'Voir moins' : 'Voir plus' }}
          <Chevron :is-up="expanded" class="ml-1"/>
        </button>
      </div>

      <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-[200px]"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 max-h-[200px]"
          leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="expanded" class="overflow-hidden p-4 pt-0 space-y-3">
          <p v-if="moreInfo" class="text-[#646A81] text-sm">
            {{ moreInfo }}
          </p>

          <div v-if="confidenceIndex > 0" class="flex items-center gap-2">
            <span class="text-black text-sm font-semibold">Indice de confiance</span>
            <TrustStars :confidence-index="confidenceIndex"/>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
