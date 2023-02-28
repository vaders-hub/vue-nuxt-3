<script lang="ts">
import CustomCheckbox from '@/components/common/forms/CustomCheckbox.vue';

export default defineComponent({
  components: {
    CustomCheckbox,
  },
  async setup() {
    definePageMeta({
      layout: 'guide',
    });

    const people = ref([
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

    const selectedPeople = ref([{ name: 'Jennifer', age: 20, sex: 'Female' }]);
    const isSelected = ref(false);

    return { people, selectedPeople, isSelected };
  },
});
</script>

<template>
  <div>
    <h1>Checkbox</h1>

    <template v-for="person in people" :key="person.name">
      <CustomCheckbox :label="person.name" v-model="selectedPeople" :value="person" />
    </template>

    <br />
    <CustomCheckbox :label="`I am checked: ${isSelected}`" v-model="isSelected" />

    <div>{{ selectedPeople }}</div>
  </div>
</template>
