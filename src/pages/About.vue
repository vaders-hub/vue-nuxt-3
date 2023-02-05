<script lang="ts">
import { defineComponent, onMounted, ref } from "#imports";
export default defineComponent({
  name: "About",
  setup() {
    console.log("About page");
  },
});
</script>
<template>
  <h1>Index page</h1>
  <div>about page</div>
  <AppAlert />
</template>
