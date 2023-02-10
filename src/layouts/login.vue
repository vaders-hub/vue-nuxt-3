<script lang="ts">
import { useFiltersStore } from '@/store';
import { filter } from 'compression';

export default defineComponent({
  async setup() {
    useHead({
      title: 'vue-nuxt-3 login',
      meta: [{ name: 'description', content: 'My amazing site.' }],
      bodyAttrs: {
        class: 'test',
      },
      script: [{ children: "console.log('Hello world')" }],
    });

    const filtersStore = useFiltersStore();

    onMounted(async () => {
      // await filtersStore.loadCoffee();
      // console.log('tokentoken', authData.value);
    });

    if (process.client) {
      const param1 = ref('value1');
      const data = await useCustomFetch('https://jsonplaceholder.typicode.com/todos/1', {
        // params: { page: 'todos/1' },
      });
      const member = await useCustomFetch('https://localhost:6443/api/member');
    }

    const authData = computed<any>(() => filtersStore.authData);
    await useAsyncData('title', filtersStore.loadCoffee);

    return { authData };
  },
});
</script>
<template>
  <div>
    Login
    <slot />
    <p>{{ authData.title ? authData.title : '' }}</p>
  </div>
</template>
