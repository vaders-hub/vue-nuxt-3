import { createFetch } from '@vueuse/core';
import { ofetch } from 'ofetch';
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

export const useCustomFetch = async (request, options?) => {
  const filtersStore = useFiltersStore();
  const filtersD = filtersStore.filtersList;

  return await ofetch(request, {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
    ...options,
    async onRequest({ request, options }: any) {
      options.headers.authorization = 'test';
    },
    async onResponse(ctx) {
      // console.log('useCustomFetch :: ', ctx);
    },
  });
};

export const useCoffeeFetch = async (request, options?) => {
  const config = useRuntimeConfig();
  const {
    public: { API_URL_COFFEE },
  } = config;

  return await ofetch(request, {
    baseURL: API_URL_COFFEE,
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
    ...options,
    async onRequest({ request, options }: any) {
      options.headers.authorization = 'test';
    },
    async onResponse(ctx) {
      // console.log('useCoffeeFetch :: ', ctx);
    },
  });
};
