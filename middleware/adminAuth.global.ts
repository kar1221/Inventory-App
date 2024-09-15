import useTokenStore from '~/stores/tokenStore';

export default defineNuxtRouteMiddleware(async (to, _) => {
  const tokenStore = useTokenStore();

  if (to.path === '/login' && tokenStore.isAuthenticated) {
    return await navigateTo('/');
  }

  if (to.path === '/create' && !tokenStore.isAuthenticated) {
    return await navigateTo('/login');
  }
});
