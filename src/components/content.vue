<template>
  <div class="content-wrapper">
    <author />
    <gallery />
  </div>
</template>
<script>
import author from "./author.vue";
import gallery from "./gallery.vue";

export default {
  name: "content",
  components: {
    author,
    gallery,
  },
};
</script>
<style scoped>
.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 63px;
  padding: 59px 39px 77px;
}
</style>
