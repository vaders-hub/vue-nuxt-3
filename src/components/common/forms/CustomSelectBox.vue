<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomSelectBox',
  props: {
    inputText: {
      type: String,
      default: null,
    },
  },
  emit: ['update:inputText'],
  async setup(props, ctx) {
    const select = ref('Nebraska');
    const items = reactive([
      { state: 'Florida', abbr: 'FL' },
      { state: 'Georgia', abbr: 'GA' },
      { state: 'Nebraska', abbr: 'NE' },
      { state: 'California', abbr: 'CA' },
      { state: 'New York', abbr: 'NY' },
    ]);
    return { select, items };
  },
});
</script>

<template>
  <div>
    <v-select
      v-model="select"
      :items="items"
      item-title="state"
      item-value="state"
      label="Select"
      persistent-hint
      return-object
      single-line
    />
    <!-- <div>{{ select.state }}</div> -->
  </div>
</template>
