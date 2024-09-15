<template>
  <header
    class="sticky left-0 top-0 flex min-w-60 flex-col items-center gap-4 font-primary"
  >
    <div
      class="z-0 flex w-full flex-1 flex-col items-center rounded-lg bg-slate-900 p-2"
    >
      <div class="m-4 flex items-center gap-1">
        <Icon
          name="mingcute:inventory-fill"
          class="rounded-full p-4 text-4xl text-sky-400"
        />
        <h1
          class="text-2xl font-extrabold uppercase tracking-wide text-slate-50"
        >
          Inventory
        </h1>
      </div>
      <div class="flex w-full flex-1 flex-col gap-2 text-slate-50">
        <NuxtLink
          v-for="link in links"
          :key="link.text"
          :to="link.to"
          active-class="before:scale-x-100"
          class="relative flex w-full items-center gap-1 px-6 py-4 font-bold text-slate-50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:origin-left before:scale-x-0 before:rounded-br-md before:rounded-tr-md before:border-l-4 before:border-sky-400 before:bg-sky-300 before:bg-opacity-15 before:transition-transform before:duration-150 before:ease-in-out before:content-[''] last:mt-auto hover:before:scale-x-100"
        >
          <Icon :name="link.icon" class="text-2xl text-slate-50" />
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
    <div class="w-full rounded-lg bg-slate-900 p-2">
      <NuxtLink
        :to="auth.isAuthenticated ? '/logout' : '/login'"
        class="relative flex w-full items-center gap-1 px-6 py-4 font-bold text-slate-50 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:rounded-lg before:bg-slate-50 before:bg-opacity-0 before:transition-all before:duration-150 before:ease-in-out before:content-[''] hover:before:bg-opacity-20"
      >
        <Icon name="mdi:account-circle" class="text-2xl" />
        <span>{{ auth.isAuthenticated ? 'Logout' : 'Login' }}</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import useTokenStore from '~/stores/tokenStore';

const auth = useTokenStore();

const links = [
  {
    to: '/',
    text: 'Home',
    icon: 'mdi:home-circle'
  },
  {
    to: '/categories',
    text: 'Categories',
    icon: 'mdi:alpha-c-circle'
  },
  {
    to: '/items',
    text: 'Items',
    icon: 'mdi:dots-horizontal-circle'
  },
  {
    to: '/create',
    text: 'Create New...',
    icon: 'mdi:plus-circle'
  }
];
</script>
