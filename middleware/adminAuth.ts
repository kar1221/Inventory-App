import useAuthStore from '~/stores/auth';

export default defineNuxtRouteMiddleware((_, __) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return navigateTo('/login', { redirectCode: 301 });
  }
});
