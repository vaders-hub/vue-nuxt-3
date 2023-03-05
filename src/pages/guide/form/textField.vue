<script lang="ts">
import CustomTextField from '@/components/common/forms/CustomTextField.vue';

export default defineComponent({
  components: {
    CustomTextField,
  },
  async setup() {
    definePageMeta({
      layout: 'guide',
    });

    const searchText = ref('1');
    const searchText2 = ref('2');
    const searchText3 = ref('3');

    return { searchText, searchText2, searchText3 };
  },
});
</script>

<template>
  <div>
    <h1>TextFields</h1>
    <custom-text-field v-model:inputText="searchText" dense :outlined="false" />
    <custom-text-field v-model:inputText="searchText2" dense :outlined="false" />
    <custom-text-field v-model:inputText="searchText3">
      <ClientOnly>
        <template #label>Custom Label</template>
        <template #message>Custom Message</template>
      </ClientOnly>
    </custom-text-field>

    <div>{{ searchText }} - {{ searchText2 }} - {{ searchText3 }}</div>
  </div>
</template>
