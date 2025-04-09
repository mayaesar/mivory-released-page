<script setup lang="ts">

const features = [
  {
    title: 'Smart Save Anywhere',
    description: 'Save links from any platform videos, blog posts, recipes, tools, or even tweets',
    icon: 'ph:bookmark-simple',
  },
  {
    title: 'Organize Your Way',
    description: 'Create custom collections to keep your saved content neatly grouped.',
    icon: 'ph:folder',
  },
  {
    title: 'Collaborate with Friends',
    description: 'Invite friends, partners, or teammates to contribute to shared collections.',
    icon: 'ph:users-three',
  },
  {
    title: 'Find It Fast',
    description: 'Search by keyword, platform, or even emojis.',
    icon: 'ph:magnifying-glass',
  },
  {
    title: 'Add Notes',
    description: 'Leave comments, thoughts, or reminders right inside your saved content.',
    icon: 'ph:note',
  },
  {
    title: 'And much more coming soon!',
    description: 'We\'re constantly improving with new features on the way.',
    icon: 'ph:dots-three-outline-fill',
  },
]

</script>

<template>
<div class="grid grid-cols-2 gap-6 mx-32 mt-6">
  <div v-for="feature in features" :key="feature.title" class="flex flex-col gap-2 px-6 py-4 ring-1 ring-gray-400 rounded-2xl drop-shadow-md bg-white">
    <UIcon :name="feature.icon" size="24" class="text-gray-900" />
    <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
    <p class="text-gray-600">{{ feature.description }}</p>
  </div>
</div>
</template>
