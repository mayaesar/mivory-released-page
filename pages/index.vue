<script setup lang="ts">

</script>

<template>
  <div class="font-gray-900 max-w-screen-lg mx-auto mb-12">
    <TopNav />
    <div class="space-y-48 p-6">
      <div class="flex flex-row items-center justify-between">
        <HeroInfo />
      </div>
      <div>
        <div class="flex flex-col content-center items-center font-semibold text-3xl mb-12">
          <h2>An Elephant Never Forgets</h2>
          <h2>Neither will You with these Features</h2>
        </div>
        <FeaturesDisplay />
      </div>
      <div class="bg-gray-100 rounded-xl pt-12">
        <h2 class="text-center font-semibold text-3xl">FAQ</h2>
        <FaqDisplay />
      </div>
    </div>
  </div>
</template>
