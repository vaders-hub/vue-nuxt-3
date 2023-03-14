<script lang="ts">
import CustomSelectBox from '@/components/common/forms/CustomSelectBox.vue';

export default defineComponent({
  components: {
    CustomSelectBox,
  },
  async setup(props, ctx) {
    definePageMeta({
      layout: 'guide',
    });

    const searchText = ref('California');

    return { searchText };
  },
});
</script>

<template>
  <div>
    <h1>Selectbox</h1>
    <custom-select-box v-model:modelValue="searchText" dense :outlined="false" />

    <div>{{ searchText }}</div>
  </div>
</template>
