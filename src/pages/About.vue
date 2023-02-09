<script lang="ts">
import { get } from '@vueuse/core';
import { useFiltersStore } from '@/store';

export default defineComponent({
  async setup() {
    const user = ref<any>({});
    const filtersStore = useFiltersStore();
    const filtersD = filtersStore.filtersList;

    onMounted(async () => {
      const param = ref('todos/1');
      const { isFetching, error, data } = await useCustomFetch(param.value, {
        method: 'get',
      });
      console.log('mounted : ', data.value);
    });

    const page = ref(1);
    const lastPage = ref('');
    const companies = ref<any>({});
    const pending = ref(false);
    const changedLastPage = computed(() => lastPage.value);

    watch(
      () => lastPage.value,
      (newVal, oldVal) => {
        console.log('service changed', newVal);
      },
      { deep: true },
    );

    const { data: cafes, error } = await useAsyncData(
      'cafes',
      () =>
        useCompanyFetch(`/api/v1/cafes`, {
          method: 'GET',
          params: {
            page: page.value,
            search: '',
          },
        }),
      {
        watch: [page],
      },
    );

    return { filtersD, lastPage, changedLastPage, user, cafes };
  },
});
</script>
<template>
  <h1>Index page</h1>
  <div>about page</div>
  <AppAlert> This is an auto-imported component. </AppAlert>

  <div>{{ filtersD }}</div>
  <div>{{ lastPage }}</div>
  <div>{{ user.a }}</div>

  <ul>
    <li v-for="cafe in cafes.data" :key="cafe.id" v-text="cafe.company.name + ' - ' + cafe.location_name"></li>
  </ul>
</template>
