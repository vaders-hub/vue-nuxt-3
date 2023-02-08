<script lang="ts">
import { get } from '@vueuse/core';
import { useFiltersStore } from '@/store';

export default defineComponent({
  setup() {
    const filtersStore = useFiltersStore();
    const filtersD = filtersStore.filtersList;

    onMounted(async () => {
      const param = ref('todos/1');
      const { isFetching, error, data } = await useCustomFetch(param.value, {
        method: 'get',
      });
      console.log('data', data.value);
    });

    const page = ref(1);
    const lastPage = ref(1);
    const companies = ref<any>({});
    const pending = ref(false);
    const loadCompanies = async () => {
      pending.value = true;
      const data = await useCompanyFetch(`/api/v1/companies`, {
        method: 'GET',
        params: {
          page: page.value,
        },
      });

      if (data) {
        lastPage.value = data.last_page;

        console.log('fetching from server.... ', lastPage.value);
      }
    };

    if (process.server) {
      loadCompanies();
    }

    return { filtersD };
  },
});
</script>
<template>
  <h1>Index page</h1>
  <div>about page</div>
  <AppAlert> This is an auto-imported component. </AppAlert>

  <div>{{ filtersD }}</div>
</template>
