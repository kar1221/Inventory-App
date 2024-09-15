<template>
  <div
    class="flex h-dvh flex-col items-center justify-center bg-slate-50 font-primary"
  >
    <h1 class="text-4xl font-bold text-red-400">Oops</h1>
    <p class="mt-2 w-3/4 max-w-md text-center text-xl text-slate-800">
      You have run into an error, you may click the button below to go back
      where you were.
    </p>
    <button
      class="mt-4 rounded-md bg-sky-500 px-4 py-2 text-slate-50"
      @click="router.back()"
    >
      Go back
    </button>
    <p class="mt-8 w-3/4 max-w-md text-slate-400">
      {{ error.statusCode }}: {{ error.message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';
const router = useRouter();

defineProps<{
  error: NuxtError;
}>();
</script>
