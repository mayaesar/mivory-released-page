<script setup lang="ts">
import { cn } from "~/utils/cn";

type Props = {
  title: string;
  description: string;
};

const { title, description } = defineProps<Props>();
const isOpen = ref(false);
</script>

<template>
  <div @click="isOpen = !isOpen" class="flex flex-col gap-2 bg-white rounded-xl cursor-pointer select-none px-6 py-4">
    <div class="flex flex-row w-full">
      <h3 class="text-lg font-semibold text-gray-700">
        {{ title }}
      </h3>
      <UIcon
          name="heroicons:chevron-down-20-solid"
          size="24"
          :class="cn('text-gray-900 transition-all ml-auto', {
            'rotate-180': isOpen,
          })"
      />
    </div>

    <p v-if="isOpen" class="text-gray-500">
      {{ description }}
    </p>
  </div>
</template>