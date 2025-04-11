<script setup lang="ts">

</script>

<template>
  <USeparator />
  <div class="flex flex-row justify-between items-center my-4 mx-6 m-auto">
    <div class="flex flex-row items-center gap-2">
      <img src="~/public/mivory-icon.svg" alt="Mivory logo" class="size-8" />
      <h2 class="font-bold text-2xl">Mivory</h2>
    </div>
    <div class="flex flex-row items-center gap-2">
      <UButton variant="link" color="neutral" size="xl" class="text-gray-700 hover:text-gray-900 hover:underline" href="/terms-and-conditions">Terms and Condition</UButton>
      <UButton variant="link" color="neutral" size="xl" class="text-gray-700 hover:text-gray-900 hover:underline" href="/privacy-policy">Privacy Policy</UButton>
    </div>
  </div>
</template>
