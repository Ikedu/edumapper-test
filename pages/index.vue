<script setup lang="ts">
import {school} from "~/data/mock";

</script>

<template>
  <div class="mx-auto">
    <div class="space-y-4">
      <SchoolCard
          :name="school.name"
          :location="school.location"
          :type="school.type"
      />
    </div>
  </div>
</template>
