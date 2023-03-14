<script lang="ts">
export default defineComponent({
  async setup(props, ctx) {
    definePageMeta({
      layout: 'guide',
      middleware: [
        function (to, from) {
          const auth = useState<any>('auth');
          if (auth.value && !auth.value.authenticated) {
            return navigateTo('/login');
          }
          // return navigateTo('/checkout');
        },
      ],
    });

    const appConfig = useAppConfig();
    const nuxtApp = useNuxtApp();
    const event = useRequestEvent();

    console.log('app config :: >? ', appConfig);

    const { ssrContext } = nuxtApp;

    if (process.server) {
      const { ssrContext } = nuxtApp;
      console.log('ssrContext', ssrContext);
    }

    return {};
  },
});
</script>

<template>
  <div>
    <h1>nuxt props</h1>
  </div>
</template>
