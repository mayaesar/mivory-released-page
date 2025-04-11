<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-6xl font-bold">People forget, <br/> Mivory doesn't</h1>
    <h3 class="text-xl">Save, Organize, Collaborate</h3>
    <div class="flex flex-row items-center gap-4 mt-4">
      <a href="https://apps.apple.com/app/id6741949955" target="_blank">
        <img src="~/public/download_en_apple.svg" alt="Download on the App Store" class="h-10" />
      </a>

      <img src="~/public/download_en_android.png" alt="Download on the App Store" class="h-10" />
    </div>
    <div class="flex flex-row items-center gap-4 mt-4">
      <div>
        <UAvatarGroup>
          <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" size="xl" />
          <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" size="xl" />
          <UAvatar src="https://github.com/noook.png" alt="Neil Richter" size="xl" />
        </UAvatarGroup>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row items-center">
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-500" size="20" />
        </div>
        100+ Users saving in Mivory
      </div>
    </div>
  </div>
</template>

