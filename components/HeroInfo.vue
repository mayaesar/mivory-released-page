<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-5xl font-bold">People forget, <br/> Mivory doesn't</h1>
    <h3 class="text-xl">Save, Organize, Collaborate</h3>
    <div class="flex flex-row items-center gap-4 mt-4">
      <UButton color="neutral" size="lg" icon="ph:app-store-logo">
        App Store
      </UButton>
      <UButton color="neutral" size="lg" icon="ph:google-play-logo">
        Google Play
      </UButton>
    </div>
    <div class="flex flex-row items-center gap-4 mt-4">
      <div>
        <UAvatarGroup>
          <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" size="xl" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" size="xl" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" size="xl" />
        </UAvatarGroup>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex flex-row items-center">
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
        </div>
        253 Users saving in Mivory
      </div>
    </div>
  </div>
</template>

