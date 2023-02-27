<script lang="ts">
export default defineComponent({
  async setup() {
    useHead({
      title: 'vue-nuxt-3 guide',
      meta: [{ name: 'description', content: 'Form input guide' }],
    });
    return {};
  },
});
</script>
<template>
  <div>
    Guide
    <slot />
  </div>
</template>
