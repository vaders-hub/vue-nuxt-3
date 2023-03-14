<script lang="ts">
export default defineComponent({
  async setup() {
    useHead({
      title: 'login page',
      meta: [{ name: 'description', content: 'visit login page' }],
    });
    definePageMeta({
      layout: 'login',
    });
  },
});
</script>
<template>
  <Head><title>title test</title></Head>
  <h1>Login page</h1>
</template>
