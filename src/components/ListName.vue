<template>
  <ul>
    <li>
      <h3>{{ getName }}</h3>
    </li>
    <li>
      <ul>
        <li>{{ path }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListName",
  props: {
    path: String
  },
  computed: {
    getName() {
      return this.path.substring(this.path.indexOf("/"), this.path.length);
    }
  }
};
</script>

<style></style>
