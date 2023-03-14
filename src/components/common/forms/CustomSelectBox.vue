<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomSelectBox',
  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },
  emit: ['update:modelValue'],
  setup(props, ctx) {
    const items = reactive([
      { state: 'Florida', abbr: 'FL' },
      { state: 'Georgia', abbr: 'GA' },
      { state: 'Nebraska', abbr: 'NE' },
      { state: 'California', abbr: 'CA' },
      { state: 'New York', abbr: 'NY' },
    ]);
    const onChangeSel = e => {
      ctx.emit('update:modelValue', e);
    };

    return { items, onChangeSel };
  },
});
</script>

<template>
  <div>
    <v-select
      :value="modelValue"
      :items="items"
      item-title="state"
      item-value="state"
      @update:modelValue="onChangeSel($event)"
    />
  </div>
</template>
