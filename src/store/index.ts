import { defineStore } from 'pinia';

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      filtersList: '1234',
    };
  },
  actions: {},
  getters: {},
});
