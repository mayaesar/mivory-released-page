<script setup lang="ts">
import Collapse from "~/components/Collapse.vue";

const questions = [
  {
    question: "What kind of content can I save with Mivory?",
    answer:
      "You can save any type of content that has a links. Mivory is designed to help you save and organize all your favorite content in one place.",
  },
  {
    question: "Is Mivory free to use?",
    answer:
      "Yes, Mivory is completely free to use. We believe that everyone should have access to a powerful tool for saving and organizing their content.",
  },
  {
    question: "Does Mivory support saving content from TikTok, Instagram, or YouTube?",
    answer:
      "Yes, Mivory supports saving content from TikTok, Instagram, YouTube, and many other platforms. You can save from any platform that has a link.",
  },
  {
    question: "Is there a browser extension or mobile app?",
    answer:
      "We have a mobile app available for both apple and android users. We are planning on eventually building a web version and browser extension.",
  },
  {
    question: "Can multiple people contribute to the same collection?",
    answer:
      "Yes, you can invite others to contribute to shared collections. This makes it easy to collaborate and share content with others.",
  },
  {
    question: "Will I lose my saved bookmarks if I uninstall the app?",
    answer:
      "No, as long as you don't delete your account, it will remain accessible even if you uninstall the app. Just log back in to access your content.",
  },
  {
    question: "I found a bug, how do I report it?",
    answer:
      "If you encounter any issues, please flag it in Report an issue found when clicking on your profile at the top. We appreciate your feedback and are always working to improve.",
  },
  {
    question: "Can I suggest a feature?",
    answer:
      "Absolutely! We love hearing from our users. You can suggest features by clicking on your profile at the top and selecting 'Feature Requests'.",
  },
];

</script>

<template>
  <div class="flex flex-col gap-4 p-3 md:p-12">
    <Collapse v-for="(question, index) in questions" :key="index" :title="question.question" :description="question.answer" />
  </div>
</template>

