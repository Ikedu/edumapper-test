<script lang="ts" setup>
import {profileCategories, school} from "~/data/mock";

</script>

<template>
  <div class="mx-auto">
    <div class="space-y-4">
      <SchoolCard
          :location="school.location"
          :name="school.name"
          :type="school.type"
      />

      <ProfileFormCard
          v-for="category in profileCategories"
          :key="`category-${category.id}`"
          :disabled="category.id !== 1"
          :title="category.title"
      >
        <template #default="{ data, updateData }">
          <ClassForm
              v-if="category.id === 1"
              :data="data"
              @update-data="(newData) => updateData(newData)"
          />
        </template>
      </ProfileFormCard>

      <div class="flex justify-center mt-10">
        <NuxtLink to="/resultats">
          <Button variant="black">Voir les résultats</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
