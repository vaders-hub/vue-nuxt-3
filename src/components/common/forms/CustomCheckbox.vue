<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomCheckbox',
  props: {
    modelValue: { type: [Array, Boolean] },
    value: { type: Object },
    label: { type: String },
  },
  emit: ['update:modelValue'],
  setup(props, ctx) {
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        ctx.emit('update:modelValue', value);
      },
    });
    return { model };
  },
});
</script>

<template>
  <v-checkbox v-model="model" :value="value" :label="label" />
</template>
