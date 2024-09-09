<template>
  <header
    class="sticky top-0 flex items-center justify-between bg-slate-900 p-6 font-primary"
  >
    <div>
      <h1 class="text-xl font-bold text-slate-50">Inventory Application</h1>
    </div>
    <div class="flex flex-col text-slate-50">
      <div class="flex gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.text"
          :to="link.to"
          active-class="before:scale-100"
          class="relative w-full before:absolute before:bottom-0 before:left-0 before:right-0 before:w-full before:origin-left before:scale-0 before:border-b-2 before:border-indigo-400 before:transition-transform before:duration-150 before:ease-in-out before:content-[''] hover:before:scale-100"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const links = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/categories',
    text: 'Categories'
  },
  {
    to: '/items',
    text: 'Items'
  }
];
</script>
