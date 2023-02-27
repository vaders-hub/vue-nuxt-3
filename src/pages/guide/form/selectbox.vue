<script lang="ts">
import CustomSelectBox from '@/components/common/forms/CustomSelectBox.vue';

export default defineComponent({
  components: {
    CustomSelectBox,
  },
  async setup() {
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
    <custom-select-box v-model:inputText="searchText" dense :outlined="false" />

    <div>{{ searchText }}</div>
  </div>
</template>
