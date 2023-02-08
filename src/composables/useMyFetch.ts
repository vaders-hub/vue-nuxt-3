import { UseFetchOptions } from "nuxt/app";
// import { NitroFetchRequest } from "nitropack";
import { KeyOfRes } from "nuxt/dist/app/composables/asyncData";

// export function useMyFetch<T>(
//   request: NitroFetchRequest,
//   opts?:
//     | UseFetchOptions<
//         T extends void ? unknown : T,
//         (res: T extends void ? unknown : T) => T extends void ? unknown : T,
//         KeyOfRes<
//           (res: T extends void ? unknown : T) => T extends void ? unknown : T
//         >
//       >
//     | undefined
// ) {
//   const config = useRuntimeConfig();
//   console.log("useMyFetch");
//   return useFetch<T>(request, {
//     baseURL: config.public.baseURL,
//     ...opts,
//   });
// }

export const useMyFetch = <T>(
  url: string,
  options?:
    | UseFetchOptions<
        T extends void ? unknown : T,
        (
          response: T extends void ? unknown : T
        ) => T extends void ? unknown : T,
        KeyOfRes<
          (
            response: T extends void ? unknown : T
          ) => T extends void ? unknown : T
        >
      >
    | undefined
) => {
  return useFetch<T>(url, {
    ...options,
    async onResponse({ request, response, options }) {
      console.log("[fetch response]");
    },
    async onResponseError({ request, response, options }) {
      console.log("[fetch response error]");
    },

    async onRequest({ request, options }) {
      console.log("[fetch request]");
    },
    async onRequestError({ request, options, error }) {
      console.log("[fetch request error]");
    },
  });
};
