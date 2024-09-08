import type { IServerUserAuthAction } from '~/types';

const useAuthStore = defineStore('auth', {
  state: () => ({
    token: sessionStorage.getItem('token')
  }),
  actions: {
    async login({ username, password }: IServerUserAuthAction) {
      const { data } = await useFetch('/adminLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          username,
          password
        }
      });

      if (data.value && data.value.token) {
        this.token = data.value.token;
        sessionStorage.setItem('token', data.value.token);
      }
    },
    logout() {
      this.token = null;
      sessionStorage.removeItem('token');
    }
  }
});

export default useAuthStore;
