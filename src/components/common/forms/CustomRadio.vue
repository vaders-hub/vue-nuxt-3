<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomRadio',
  props: {
    modelValue: { type: [Array, Boolean] },
    value: { type: Object },
    label: { type: String },
  },
  emit: ['update:modelValue'],
  setup(props, ctx) {
    const column = ref(null);
    const inline = ref('radio-1');
    return { column, inline };
  },
});
</script>

<template>
  <v-radio-group v-model="inline" inline>
    <v-radio label="Option 1" value="radio-1" />
    <v-radio label="Option 2" value="radio-2" />
  </v-radio-group>
</template>
