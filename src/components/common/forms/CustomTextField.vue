<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomTextField',
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
  },
  emit: ['update:modelValue'],
  async setup(props, ctx) {
    const parentSlots = computed(() => Object.keys(ctx.slots));
    const textFieldDefaults = computed(() => ({
      outlined: true,
      dense: true,
      color: 'primary',
    }));
    const cardDefaults = computed(() => ({
      color: ctx.attrs.color || 'primary',
    }));

    return { parentSlots, textFieldDefaults, cardDefaults };
  },
});
</script>

<template>
  <div>
    <v-text-field :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      <ClientOnly
        ><template v-for="slot in parentSlots" #[slot]>
          <slot :name="slot" />
        </template>
      </ClientOnly>
    </v-text-field>
  </div>
</template>
