<template>
  <div></div>
</template>

<script setup lang="ts">
import useTokenStore from '~/stores/tokenStore';

const tokenStore = useTokenStore();

onMounted(() => {
  tokenStore.removeToken();
  navigateTo('/');
});
</script>

<style></style>
