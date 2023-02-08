import { createFetch } from "@vueuse/core";
import { HttpsProxyAgent } from "https-proxy-agent";

const customFetchConfig = createFetch({
  baseUrl: "https://jsonplaceholder.typicode.com",
  options: {
    async beforeFetch({ options }) {
      return { options };
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});

export const useCustomFetch = async (request, options?) => {
  const config = useRuntimeConfig();
  return await customFetchConfig(request, {
    ...options,
    async beforeFetch({ url, options, cancel }) {},
    async afterFetch(ctx) {},
  });
};
