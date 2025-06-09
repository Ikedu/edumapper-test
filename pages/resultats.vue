<script lang="ts" setup>
import ResultCard from '@/components/results/ResultCard.vue'
import Button from '@/components/ui/Button.vue'
import Pencil from '@/components/icons/Pencil.vue'
import Plus from '@/components/icons/Plus.vue'

import {results as initialResults} from '@/data/mock'
import {CHANCES_LEVELS} from '@/data/constants'
import type {AdmissionResult} from '@/types/AdmissionResult'

const results = ref<AdmissionResult[]>([...initialResults])

const removeProgram = (id: number) => {
  results.value = results.value.filter((result) => result.id !== id)
}
</script>

<template>
  <div class="mx-auto sm:px-2 lg:px-0 lg:max-w-[720px]">
    <div>
      <h2 class="text-[32px] font-semibold leading-[130%] text-black">
        Tes chances d’admission aux formations
      </h2>
      <p class="mt-2 text-sm leading-[140%] font-light text-pretty text-[#646A81]">
        Cette estimation provient de calculs rigoureux fondés sur les
        caractéristiques de ton profil et les statistiques passées de cette
        formation. Elle est fournie à titre indicatif et ne garantit en aucun
        cas la décision d’admission de l’établissement.
      </p>

      <Button class="mt-6" variant="secondary">
        <Pencil class="w-4 h-4"/>
        Modifier mon profil
      </Button>
    </div>

    <div class="mt-8 space-y-5">
      <ResultCard
          v-for="result in results"
          :key="result.id"
          :chance-level="result.chanceLevel"
          :confidence-index="result.trustLevel"
          :location="result.location"
          :more-info="result.moreInfo"
          :result="result.program"
          :school="result.school"
          :status-value="CHANCES_LEVELS[result.chanceLevel].level * 25"
          @remove="removeProgram(result.id)"
      />
    </div>

    <div class="mt-8 max-w-[282px] mx-auto">
      <Button class="w-full" variant="black">
        <Plus class="w-4 h-4"/>
        Ajouter une formation
      </Button>
    </div>
  </div>
</template>
