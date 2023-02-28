<script lang="ts">
export default defineComponent({
  name: 'MultiCheckbox',
  props: {
    value: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const checkedNames = reactive([]);
    const listof = ['aa', 'bb', 'cc'];
    return { checkedNames, listof };
  },
});
</script>

<template>
  <div>
    <div>
      <v-checkbox
        v-for="(option, idx) in options"
        :fieldId="option.name"
        :label="option.name"
        :key="idx"
        :value="option.name"
        v-model="value[idx]"
      />
    </div>
    <div>
      <template v-for="(ckOp, idx) in listof" :key="idx">
        <input type="checkbox" :id="`ck-${idx}`" :value="ckOp" v-model="checkedNames[idx]" />
        <label :for="`ck-${idx}`">{{ ckOp }}</label>
      </template>
    </div>
    <div>{{ checkedNames }}</div>
  </div>
</template>
