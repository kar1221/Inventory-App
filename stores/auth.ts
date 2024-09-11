import type { IServerUserAuthAction } from '~/types';

const useAuthStore = defineStore('auth', {
  state: () => {
    const token = useCookie('token');

    return {
      token: token.value,
      isLoading: false,
      isAuthenticated: !!token.value
    };
  },
  actions: {
    async login({ username, password }: IServerUserAuthAction) {
      const { data, status } = await useFetch('/adminLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          username,
          password
        }
      });

      computed(() => {
        this.isLoading = status.value === 'pending';
      });

      if (data.value && data.value.token) {
        const token = useCookie('token');

        this.token = data.value.token;
        token.value = data.value.token;
      }
    },
    logout() {
      const token = useCookie('token');
      this.token = null;
      token.value = null;
    }
  }
});

export default useAuthStore;
