import { defineStore } from 'pinia';

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      authData: null,
      filtersList: '1234',
    };
  },
  actions: {
    async loadCoffee() {
      try {
        const data = await useCustomFetch('https://jsonplaceholder.typicode.com/todos/1');

        if (data) this.authData = data;
      } catch (e) {
        console.warn(e);
      }
    },
    callbackTest(cbk: any) {
      setTimeout(() => {
        cbk();
      }, 3000);
    },
  },
  getters: {},
});
