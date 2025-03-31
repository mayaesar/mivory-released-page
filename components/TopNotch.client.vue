<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <div class="mx-12 flex flex-row justify-between items-center px-6 py-2 fixed top-0 left-0 right-0 border rounded-b-2xl border-gray-300 dark:border-gray-700 border-t-0">
    <img src="/mivory-icon.svg" alt="Mivory logo: smart pink elephant" class="size-12"/>
    <h2 class="font-semibold font-header text-xl">Mivory</h2>
    <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        color="neutral"
        variant="ghost"
        @click="isDark = !isDark"
    />
  </div>
</template>
