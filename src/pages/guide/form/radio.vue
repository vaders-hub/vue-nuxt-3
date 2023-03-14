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
    const radioList = ref<any>([
      {
        name: 'William',
        age: 30,
        sex: 'Male',
      },
      {
        name: 'Thomas',
        age: 24,
        sex: 'Male',
      },
      {
        name: 'Jennifer',
        age: 20,
        sex: 'Female',
      },
    ]);
    const selectedRadio = ref('Jennifer');

    return { selectedRadio, radioList };
  },
});
</script>

<template>
  <div>
    <h1>Radio button</h1>
    <div>{{ selectedRadio }}</div>
    <CustomRadio :items="radioList" v-model="selectedRadio" />
  </div>
</template>
