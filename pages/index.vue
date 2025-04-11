<script setup lang="ts">

import Footer from "~/components/Footer.vue";
</script>

<template>
  <div class="text-gray-900 tracking-tight max-w-screen-lg mx-auto mb-12">
    <TopNav />
    <div class="space-y-48 p-2.5 md:p-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-12">
        <HeroInfo />
        <USkeleton class="aspect-[2/3] h-[70dvh]"/>
      </div>
      <div>
        <div id="how-it-works" class="flex flex-col content-center items-center font-bold text-4xl mb-12 py-6">
          <h2>An Elephant Never Forgets</h2>
          <h2>Neither will You with these Features</h2>
        </div>
        <FeaturesDisplay />
      </div>
      <div id="faq" class="py-6">
        <div class="bg-gray-100 md:rounded-xl pt-12 -mx-2.5 md:mx-0">
          <h2 class="text-center font-bold text-3xl">FAQ</h2>
          <FaqDisplay />
        </div>
      </div>
    </div>
    <div class="mt-12">
      <Footer />
    </div>

  </div>
</template>
