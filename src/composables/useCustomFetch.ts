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

  return await ofetch(request, {
    baseURL: 'https://api.roastandbrew.coffee',
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
    ...options,
    async onRequest({ request, options }: any) {
      options.headers.authorization = 'test';
    },
    async onResponse(ctx) {},
  });
};
