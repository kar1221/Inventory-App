<template>
  <div class="flex w-full items-center justify-center">
    <form
      class="flex flex-col gap-4 font-primary"
      @submit.prevent="handleSubmit()"
    >
      <div v-if="error" class="rounded-md bg-red-500 p-4 text-slate-50">
        <p class="font-semibold">
          {{ error?.statusMessage }}
        </p>
      </div>
      <div
        class="flex items-center gap-1 rounded-md border-2 border-slate-200 bg-slate-200 px-4 transition-all duration-150 ease-in-out has-[:focus]:border-sky-400 has-[:user-invalid]:border-red-400"
        @click="usernameRef?.focus()"
      >
        <label for="user" class="flex items-center text-2xl">
          <Icon name="mdi:account" aria-hidden="true" />
          <div class="sr-only">Username</div>
        </label>
        <input
          id="user"
          ref="usernameRef"
          v-model="username"
          class="w-full bg-transparent p-4 text-lg outline-none"
          type="text"
          autocomplete="name"
          aria-autocomplete="both"
          required
          aria-required="true"
          placeholder="Username"
        />
      </div>
      <div
        class="flex items-center gap-1 rounded-md border-2 border-slate-200 bg-slate-200 px-4 transition-all duration-150 ease-in-out has-[:focus]:border-sky-400 has-[:user-invalid]:border-red-400"
        @click="passwordRef?.focus()"
      >
        <label for="password" class="flex items-center text-2xl">
          <Icon name="mdi:lock" aria-hidden="true" />
          <div class="sr-only">Password</div>
        </label>
        <input
          id="password"
          ref="passwordRef"
          v-model="password"
          class="w-full bg-transparent p-4 text-lg outline-none"
          type="password"
          required
          aria-required="true"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        class="rounded-md bg-sky-600 py-4 text-lg uppercase tracking-widest text-slate-50 transition-colors duration-150 ease-in-out hover:bg-sky-400"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import useTokenStore from '~/stores/tokenStore';

const username = ref<string>('');
const password = ref<string>('');
const usernameRef = useTemplateRef('usernameRef');
const passwordRef = useTemplateRef('passwordRef');

const tokenStore = useTokenStore();

const { data, execute, error } = useFetch('/adminLogin', {
  method: 'post',
  immediate: false,
  server: false,
  body: {
    username,
    password
  },
  watch: false
});

const handleSubmit = async () => {
  await execute();

  const token = data.value?.token;

  if (!token) return;

  tokenStore.setToken(token);
  await navigateTo('/');
};
</script>
