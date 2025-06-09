<script lang="ts" setup>
import {CLASS_TYPES, SCHOOL_CLASSES} from "~/data/constants";

defineProps<{
  data: Record<string, unknown>;
}>();

const emit = defineEmits<{
  updateData: [data: Record<string, unknown>];
}>();

const handleClassName = (className: string) => {
  emit("updateData", {className});
};

const handleClassType = (classType: string) => {
  emit("updateData", {classType});
};
</script>


<template>
  <div>
    <div class="mb-6 border-b border-[#646A81] pb-6">
      <div class="pt-6 flex flex-wrap gap-2 items-center">
        <Button
            v-for="schoolClass in SCHOOL_CLASSES"
            :key="schoolClass.key"
            :variant="schoolClass.label === data.className ? 'secondary' : 'grey'"
            @click="handleClassName(schoolClass.label)"
        >
          {{ schoolClass.label }}
        </Button>
      </div>
    </div>

    <div>
      <h4 class="text-sm text-black mb-4">Type de bac</h4>
      <div class="flex flex-wrap gap-2 items-center">
        <Button
            v-for="schoolClassType in CLASS_TYPES"
            :key="schoolClassType.key"
            :variant="schoolClassType.label === data.classType ? 'secondary' : 'grey'"
            @click="handleClassType(schoolClassType.label)"
        >
          {{ schoolClassType.label }}
        </Button>
      </div>
    </div>
  </div>
</template>
