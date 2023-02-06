<script lang="ts">
import { useFiltersStore } from "@/store";

export default defineComponent({
  setup() {
    const filtersStore = useFiltersStore();
    const filtersD = filtersStore.filtersList;

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
