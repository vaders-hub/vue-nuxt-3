import { createFetch } from '@vueuse/core';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { useFiltersStore } from '@/store';

const customFetchConfig = createFetch({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  options: {
    async beforeFetch({ options }) {
      return { options };
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
});

const companyFetchConfig = createFetch({
  baseUrl: 'https://api.roastandbrew.coffee',
  options: {
    async beforeFetch({ options }) {
      return { options };
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
});

export const useCustomFetch = async (request, options?) => {
  const filtersStore = useFiltersStore();
  const filtersD = filtersStore.filtersList;

  return await customFetchConfig(request, {
    ...options,
    async beforeFetch({ url, options, cancel }) {},
    async afterFetch(ctx) {},
  });
};

export const useCompanyFetch = async (request, options?) => {
  const config = useRuntimeConfig();

  return await $fetch(request, {
    baseURL: 'https://api.roastandbrew.coffee',
    ...options,
    async onRequest({ request, options, response, error }) {
      // console.log('onRequest >>', request);
    },
    async onResponse(ctx) {
      // console.log('onResponse >>', ctx);
    },
  });
};
