<script lang="ts" setup>
import MapPin from '@/components/icons/Pin.vue'
import Building from '@/components/icons/Building.vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'

const props = defineProps<{
  name: string
  location: string
  type: string
}>()

const emit = defineEmits<{
  (e: 'edit'): void
}>()

const handleEdit = () => emit('edit')
</script>

<template>
  <Card gradient>
    <div class="flex flex-col items-start sm:flex-row sm:justify-between gap-4">
      <div>
        <h2 class="text-2xl font-bold mb-2">{{ props.name }}</h2>

        <div class="flex flex-wrap items-center gap-4 text-sm text-white">
          <div class="flex items-center gap-1">
            <MapPin class="w-4 h-4 text-white"/>
            <span>{{ props.location }}</span>
          </div>

          <div class="flex items-center gap-1">
            <Building class="w-4 h-4 text-white"/>
            <span>{{ props.type }}</span>
          </div>
        </div>
      </div>

      <Button
          aria-label="Modifier l'établissement"
          size="sm"
          variant="base"
          @click="handleEdit"
      >
        Modifier
      </Button>
    </div>
  </Card>
</template>
