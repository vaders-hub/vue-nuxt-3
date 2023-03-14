<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomRadio',
  props: {
    modelValue: { type: String },
    items: { type: Object },
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
  <v-radio-group v-model="model">
    <v-radio v-for="(item, idx) in items" :key="idx" :label="item.name" :value="item.name" />
  </v-radio-group>
</template>
