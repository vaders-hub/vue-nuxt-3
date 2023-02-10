<script lang="ts">
import { get } from '@vueuse/core';
import { useFiltersStore } from '@/store';

export default defineComponent({
  async setup() {
    if (process.client) {
      const param1 = ref('value1');
      const data = await useCustomFetch('https://jsonplaceholder.typicode.com/todos/1', {
        // params: { page: 'todos/1' },
      });
      const member = await useCustomFetch('https://localhost:6443/api/member');
    }

    // return { data };
  },
});
</script>
<template>
  <div>
    Login
    <slot />
  </div>
</template>
