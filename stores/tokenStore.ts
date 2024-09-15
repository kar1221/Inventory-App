const useTokenStore = defineStore('token', () => {
  const _cookie = useCookie('token');

  const token = ref(_cookie.value);

  const isAuthenticated = computed(() => !!token.value);

  const setToken = (_token: string) => {
    token.value = _token;
    _cookie.value = _token;
  };

  const removeToken = () => {
    token.value = null;
    _cookie.value = null;
  };

  return { token, isAuthenticated, setToken, removeToken };
});

export default useTokenStore;
