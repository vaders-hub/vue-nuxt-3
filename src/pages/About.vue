<script lang="ts">
import { get } from '@vueuse/core';
import { useFiltersStore } from '@/store';

export default defineComponent({
  setup() {
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
    const lastPage = ref(1);
    const companies = ref<any>({});
    const pending = ref(false);
    const changedLastPage = computed(() => lastPage.value);
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

        console.log('fetching from server.... ', lastPage.value, changedLastPage.value);
      }
    };

    // if (process.client) {
    //   loadCompanies();
    // }

    watch(
      () => lastPage.value,
      (newVal, oldVal) => {
        console.log('service changed', newVal);
      },
      { deep: true },
    );

    useAsyncData(async () => {
      loadCompanies();

      user.value = { a: 'aa' };
    });

    return { filtersD, lastPage, changedLastPage, user };
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
</template>
