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

    const people = ref<any>([
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
    const checkAll = computed({
      get() {
        if (selectedPeople.value.length === people.value.length) return true;
        return false;
      },
      set(value) {
        if (value) selectedPeople.value = people.value;
        if (!value) selectedPeople.value = [];
      },
    });

    return { people, selectedPeople, isSelected, checkAll };
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
    <CustomCheckbox :label="`check all: ${isSelected}`" v-model="checkAll" />

    <div>{{ selectedPeople }}</div>
  </div>
</template>
