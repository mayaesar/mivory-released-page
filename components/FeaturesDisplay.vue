<script setup lang="ts">

const features = [
  {
    title: 'Smart Save Anywhere',
    description: 'Save links from any platform videos, blog posts, recipes, tools, or even tweets',
    icon: 'lucide:bookmark',
  },
  {
    title: 'Organize Your Way',
    description: 'Create custom collections to keep your saved content neatly grouped.',
    icon: 'lucide:folder',
  },
  {
    title: 'Collaborate with Friends',
    description: 'Invite friends, partners, or teammates to contribute to shared collections.',
    icon: 'lucide:users',
  },
  {
    title: 'Find It Fast',
    description: 'Search by keyword, platform, or even emojis.',
    icon: 'lucide:search',
  },
  {
    title: 'Add Notes',
    description: 'Leave comments, thoughts, or reminders right inside your saved content.',
    icon: 'lucide:notebook-pen',
  },
  {
    title: 'And much more coming soon!',
    description: 'We\'re constantly improving with new features on the way.',
    icon: 'lucide:rocket',
  },
]

</script>

<template>
<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-for="feature in features" :key="feature.title" class="flex flex-col gap-2 px-10 py-8 ring-1 ring-gray-200 rounded-2xl shadow-md hover:shadow-lg bg-white">
    <UIcon :name="feature.icon" size="28" class="text-gray-900 mb-3" />
    <h3 class="text-xl font-bold">{{ feature.title }}</h3>
    <p class="text-gray-600">{{ feature.description }}</p>
  </div>
</div>
</template>
