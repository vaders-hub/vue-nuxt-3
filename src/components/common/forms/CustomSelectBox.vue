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
  setup(props, ctx) {
    const items = reactive([
      { state: 'Florida', abbr: 'FL' },
      { state: 'Georgia', abbr: 'GA' },
      { state: 'Nebraska', abbr: 'NE' },
      { state: 'California', abbr: 'CA' },
      { state: 'New York', abbr: 'NY' },
    ]);
    const onChangeSel = e => {
      ctx.emit('update:inputText', e);
    };

    return { items, onChangeSel };
  },
});
</script>

<template>
  <div>
    <v-select
      :value="inputText"
      :items="items"
      item-title="state"
      item-value="state"
      @update:modelValue="onChangeSel($event)"
    />
  </div>
</template>
