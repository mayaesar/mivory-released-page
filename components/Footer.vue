<script setup lang="ts">
const { t } = useI18n({
  messages: {
    en: {
      terms_and_conditions: "Terms and Conditions",
      privacy_policy: "Privacy Policy",
    },
    fr: {
      terms_and_conditions: "Conditions d'utilisation",
      privacy_policy: "Politique de confidentialité",
    }
  }
})
</script>

<template>
  <USeparator />
  <div class="flex flex-row justify-between items-center my-4 mx-6 m-auto">
    <NuxtLink href="/" class="flex flex-row items-center gap-2">
      <img src="~/public/mivory-icon.svg" alt="Mivory logo" class="size-8" />
      <h2 class="font-bold text-2xl">Mivory</h2>
    </NuxtLink>
    <div class="flex flex-row items-center gap-2">
      <UButton variant="link" color="neutral" size="xl" class="text-gray-700 hover:text-gray-900 hover:underline" href="/terms-and-conditions">
        {{ t('terms_and_conditions') }}
      </UButton>
      <UButton variant="link" color="neutral" size="xl" class="text-gray-700 hover:text-gray-900 hover:underline" href="/privacy-policy">
        {{ t('privacy_policy') }}
      </UButton>
    </div>
  </div>
</template>
