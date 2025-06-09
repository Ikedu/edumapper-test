<script lang="ts" setup>

</script>

<template>
  <div class="mx-auto sm:px-2 lg:px-0 lg:max-w-[720px]">
    <div>
      <h2 class="text-[32px] font-semibold leading-[130%] text-black">
        Tes chances d’admission aux formations
      </h2>
      <p
          class="mt-2 text-sm leading-[140%] font-light text-pretty text-[#646A81]"
      >
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


    <div class="mt-8 max-w-[282px] mx-auto">
      <Button class="w-full" variant="black">
        <Plus class="w-4 h-4"/>
        Ajouter une formation
      </Button>
    </div>
  </div>
</template>
