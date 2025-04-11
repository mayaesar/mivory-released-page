<script setup lang="ts">
const onClickAppStore = () => {
  window.open("https://apps.apple.com/app/id6741949955", "_blank");
};

const onClickPlayStore = () => {
  window.open("https://play.google.com/store/apps/details?id=com.mivory.app", "_blank");
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-6xl font-bold mb-12">People forget, <br/> Mivory doesn't</h1>
    <div class="flex items-stretch gap-3 h-14 mb-3">
      <img src="~/public/download_en_apple.svg" alt="Download on the App Store" :draggable="false" class="h-full object-contain cursor-pointer" @click="onClickAppStore" />
      <img src="~/public/download_en_android.png" alt="Download on the Play Store" :draggable="false" class="h-full object-contain cursor-pointer" @click="onClickPlayStore" />
    </div>
    <div class="flex flex-row items-center gap-4">
      <UAvatarGroup>
        <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" size="xl" />
        <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" size="xl" />
        <UAvatar src="https://github.com/noook.png" alt="Neil Richter" size="xl" />
      </UAvatarGroup>
      <div class="flex flex-col">
        <div class="flex flex-row items-center mb-1">
          <UIcon name="ph:star-fill" class="text-yellow-400" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-400" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-400" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-400" size="20" />
          <UIcon name="ph:star-fill" class="text-yellow-400" size="20" />
        </div>
        <p class="text-sm text-gray-700 font-medium"><b class="font-black">5/5</b> from 100+ Users saving in Mivory</p>
      </div>
    </div>
  </div>
</template>

