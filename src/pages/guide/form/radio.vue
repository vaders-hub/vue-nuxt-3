<script lang="ts">
import CustomRadio from '@/components/common/forms/CustomRadio.vue';

export default defineComponent({
  components: {
    CustomRadio,
  },
  async setup() {
    definePageMeta({
      layout: 'guide',
    });

    return {};
  },
});
</script>

<template>
  <div>
    <h1>Radio button</h1>
    <CustomRadio />
  </div>
</template>
