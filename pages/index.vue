<script setup lang="ts">

</script>

<template>
  <div class="font-gray-900 max-w-screen-lg m-auto mb-12">
    <TopNav />
    <div class="h-dvh max-w-dvw flex flex-col gap-12 px-6 py-6">
      <div class="flex flex-row items-center justify-between">
        <HeroInfo />
      </div>
      <div class="flex flex-col content-center items-center mt-12 font-semibold text-3xl">
        <h2>An Elephant Never Forgets</h2>
        <h2>Neither will You with these Features</h2>
      </div>
      <FeaturesDisplay />
    </div>
    <div>
      <h2 class="text-center mt-24 font-semibold text-3xl">FAQ</h2>
    </div>
  </div>
</template>
